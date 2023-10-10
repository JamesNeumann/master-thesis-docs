function test(userId, maxIterations = 100) {
  let iteration = 0;
  const MAX_ITERATION = maxIterations;
  const run = setInterval(() => {
    const events = [
      {
        event: 'client-node-locked',
        data: {
          userId: userId,
          timestamp: Date.now(),
          data: { nodeId: 'b375eab2ebb29e7f', userId: userId },
          event: 'client-node-locked',
        },
        channel: 'presence-task-6505c2205eeaa06563f61cfa',
      },
      {
        event: 'client-node-unlocked',
        data: {
          userId: userId,
          timestamp: Date.now(),
          data: 'b375eab2ebb29e7f',
          event: 'client-node-unlocked',
        },
        channel: 'presence-task-6505c2205eeaa06563f61cfa',
      },
      {
        event: 'client-control-locked',
        data: {
          userId: userId,
          timestamp: Date.now(),
          data: '82fe745db27963fa',
          event: 'client-control-locked',
        },
        channel: 'presence-task-6505c2205eeaa06563f61cfa',
      },
      {
        event: 'client-control-unlocked',
        data: {
          userId: userId,
          timestamp: Date.now(),
          data: '82fe745db27963fa',
          event: 'client-control-unlocked',
        },
        channel: 'presence-task-6505c2205eeaa06563f61cfa',
      },
      {
        event: 'client-control-changed',
        data: {
          userId: userId,
          timestamp: Date.now(),
          data: { nodeId: '23abd05dc5f7f76f', controlId: '2982cbb7f986738a', value: [2] },
          event: 'client-control-changed',
        },
        channel: 'presence-task-6505c2205eeaa06563f61cfa',
      },
      {
        event: 'client-node-dragged',
        data: {
          userId: userId,
          timestamp: Date.now(),
          data: {
            userId: userId,
            nodeId: '23abd05dc5f7f76f',
            position: { x: -1062.3439605067367, y: -1577.8282468683817 },
            previous: { x: -1062.6831543071412, y: -1577.8282468683817 },
          },
          event: 'client-node-dragged',
        },
        channel: 'presence-task-6505c2205eeaa06563f61cfa',
      },
      {
        event: 'client-node-created',
        data: {
          userId: userId,
          timestamp: Date.now(),
          data: {
            node: {
              id: 'c2d665489a211a41',
              type: 'Conv2DNode',
              label: 'Conv2D',
              inputs: [
                { type: 'ClassicPreset.Input', key: 'in', id: '25b1e6314b64dd68', label: 'in', socket: { name: '2d' } },
              ],
              outputs: [
                {
                  type: 'ClassicPreset.Output',
                  key: 'out',
                  id: '68615f06e0f8203c',
                  label: 'out',
                  socket: { name: '2d' },
                },
              ],
              controls: [
                {
                  type: 'NumberControl',
                  key: 'filters',
                  id: '43edb122466dfffb',
                  value: 16,
                  min: 0,
                  max: 128,
                  placeholder: 'Filters',
                  label: 'Filters',
                },
                {
                  type: 'DimensionControl',
                  key: 'kernel',
                  id: 'c564a51e916eaee6',
                  label: 'Kernel',
                  value: { x: 3, y: 3 },
                  xOptions: { min: 0, max: 128, placeholder: 'x' },
                  yOptions: { min: 0, max: 128, placeholder: 'y' },
                },
                {
                  type: 'DimensionControl',
                  key: 'stride',
                  id: '2f23ddbf014e1bee',
                  label: 'Stride',
                  value: { x: 1, y: 1 },
                  xOptions: { min: 0, max: 128, placeholder: 'x' },
                  yOptions: { min: 0, max: 128, placeholder: 'y' },
                },
                {
                  key: 'padding',
                  value: 'none',
                  type: 'DropdownControl',
                  id: 'e43c2e5092d7218f',
                  values: ['none', 'same'],
                  label: 'Padding',
                },
                {
                  key: 'activation',
                  value: 'relu',
                  type: 'ActivationControl',
                  id: '3351d5515ae5a97a',
                  values: ['None (Linear)', 'sigmoid', 'tanh', 'relu', 'softmax', 'log_softmax'],
                  label: 'Activation',
                },
              ],
              sockets: { in: { name: '2d', type: '2D' }, out: { name: '2d', type: '2D' } },
            },
            position: { x: 227.49691501494277, y: -337.1298958197296 },
          },
          event: 'client-node-created',
        },
        channel: 'presence-task-6505c2205eeaa06563f61cfa',
      },
      {
        event: 'client-node-removed',
        data: {
          userId: userId,
          timestamp: Date.now(),
          data: '23abd05dc5f7f76f',
          event: 'client-node-removed',
        },
        channel: 'presence-task-6505c2205eeaa06563f61cfa',
      },
      {
        event: 'client-connection-created',
        data: {
          userId: userId,
          timestamp: Date.now(),
          data: {
            id: 'bb797b68204dd8a0',
            source: 'b375eab2ebb29e7f',
            sourceOutput: 'out',
            target: '195c176ad9a1fa3f',
            targetInput: 'in',
          },
          event: 'client-connection-created',
        },
        channel: 'presence-task-6505c2205eeaa06563f61cfa',
      },
      {
        event: 'client-connection-removed',
        data: {
          userId: userId,
          timestamp: Date.now(),
          data: 'bb797b68204dd8a0',
          event: 'client-connection-removed',
        },
        channel: 'presence-task-6505c2205eeaa06563f61cfa',
      },
    ];
    for (const event of events) {
      temp1.send(JSON.stringify(event));
    }
    iteration++;
    if (iteration == MAX_ITERATION) {
      clearInterval(run);
    }
  }, 1000);
  return run;
}
