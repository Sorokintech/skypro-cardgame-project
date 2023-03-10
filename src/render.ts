const template = (currentCards: string[]) => ({
  tag: 'div',
  cls: 'container-game-page',
  content: [
    {
      tag: 'div',
      cls: 'container-header-game',
      content: [
        {
          tag: 'div',
          cls: 'container-header-timer',
          content: [
            {
              tag: 'div',
              cls: 'container-timer-up',
              content: [
                {
                  tag: 'div',
                  cls: 'timer-text',
                  content: 'min',
                },
                {
                  tag: 'div',
                  cls: 'timer-text',
                  content: 'sec',
                },
              ],
            },
            {
              tag: 'div',
              cls: 'container-timer-down',
              content: [
                {
                  tag: 'div',
                  cls: 'timer-min',
                  content: '00',
                },
                {
                  tag: 'div',
                  cls: 'timer-dot',
                  content: '.',
                },
                {
                  tag: 'div',
                  cls: 'timer-sec',
                  content: '00',
                },
              ],
            },
          ],
        },
        {
          tag: 'div',
          cls: 'container-header-btn',
          content: [
            {
              tag: 'button',
              cls: 'start-button',
              content: 'Начать заново',
            },
          ],
        },
      ],
    },
    {
      tag: 'div',
      cls: 'container-cards',
      content: currentCards.map((src) => ({
        tag: 'div',
        cls: 'card',
        content: [
          {
            tag: 'img',
            cls: 'img',
            attrs: {
              src,
            },
            content: '',
          },
        ],
      })),
    },
  ],
});

const templateLose = {
  tag: 'div',
  cls: 'container',
  content: [
    {
      tag: 'div',
      cls: 'pop-up-img',
      content: {
        tag: 'img',
        clg: 'image',
        attrs: {
          src: `./src/cards/lose.png`,
        },
        content: '',
      },
    },
    {
      tag: 'div',
      cls: 'pop-up-header',
      content: 'Вы проиграли',
    },
    {
      tag: 'div',
      cls: 'pop-up-timer-tag',
      content: 'Затраченное время:',
    },
    {
      tag: 'div',
      cls: 'pop-up-timer',
      content: '02.02',
    },
    {
      tag: 'button',
      cls: 'pop-up-btn',
      content: 'Играть снова',
    },
  ],
};
const templateWin = {
  tag: 'div',
  cls: 'container',
  content: [
    {
      tag: 'div',
      cls: 'pop-up-img',
      content: {
        tag: 'img',
        clg: 'image',
        attrs: {
          src: `./src/cards/win.png`,
        },
        content: '',
      },
    },
    {
      tag: 'div',
      cls: 'pop-up-header',
      content: 'Вы выиграли',
    },
    {
      tag: 'div',
      cls: 'pop-up-timer-tag',
      content: 'Затраченное время:',
    },
    {
      tag: 'div',
      cls: 'pop-up-timer',
      content: '02.02',
    },
    {
      tag: 'button',
      cls: 'pop-up-btn',
      content: 'Играть снова',
    },
  ],
};
const templateAlert = {
  tag: 'div',
  cls: 'container',
  content: [
    {
      tag: 'div',
      cls: 'pop-up-header',
      content: 'Нужно выбрать сложность',
    },
    {
      tag: 'button',
      cls: 'pop-up-btn',
      content: 'Выбрать сложность',
    },
  ],
};

export { template, templateLose, templateWin, templateAlert };
