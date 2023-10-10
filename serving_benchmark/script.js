import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

const DATASET = 'mnist';
const RUN_MODE = 'pytorch';

const options = {
  mnist: {
    image: './mnist.bin',
    metadata: {
      class_map: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 },
      classes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      dataset_type: 'classification',
      dimension: { x: 28, y: 28 },
      is_grayscale: true,
      patch_magnification: null,
      patch_size: null,
      task_ids: null,
    },
    pytorch: '97460cea38db4c868eaf1ae899a21b17',
    onnx: '4764941541f545829b4e0f096065b5b9',
  },
  breakhis: {
    image: './breakhis.bin',
    metadata: {
      class_map: {
        adenosis: 0,
        ductal_carcinoma: 1,
        fibroadenoma: 2,
        lobular_carcinoma: 3,
        mucinous_carcinoma: 4,
        papillary_carcinoma: 5,
        phyllodes_tumor: 6,
        tubular_adenoma: 7,
      },
      classes: [0, 1, 2, 3, 4, 5, 6, 7],
      dataset_type: 'classification',
      dimension: { x: 700, y: 460 },
      is_grayscale: false,
      patch_magnification: null,
      patch_size: null,
      task_ids: null,
    },
    pytorch: '64efc65890b8493fb896ef38985ee47e',
    onnx: 'ed197849ec134041925a5c802b821950',
  },
};
const image = open(options[DATASET].image);

export default function () {
  const modelId = options[DATASET][RUN_MODE];
  const url = `http://10.168.2.83:8080/serve/${modelId}`;
  const payload = JSON.stringify({
    image: image,
    metadata: options[DATASET].metadata,
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = http.post(url, payload, params);
  console.log(res.json()['propabilities'][0]);
  check(res, {
    'is status 200': (r) => r.status === 200,
    'has propabilities': (r) =>
      r.json()['propabilities'][0].length === Object.keys(options[DATASET].metadata.class_map).length,
  });
  sleep(1);
}
