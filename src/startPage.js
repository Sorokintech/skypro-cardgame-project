const templateStartPage ={
    tag : 'div',
    cls: 'container',
    content: [
        {
            tag: 'div',
            cls: 'container-header',
            content: 'Выбери сложность',
        }, 
        {
            tag: 'div',
            cls: 'difficulty-container',
            content: [
                {
                    tag: 'button',
                    cls: 'difficulty-button',
                    content: '1'
                },
                {
                    tag: 'button',
                    cls: 'difficulty-button',
                    content: '2'
                },
                {
                    tag: 'button',
                    cls: 'difficulty-button',
                    content: '3'
                },
            ]
        },
        {
            tag: 'button',
            cls: 'start-button',
            content: 'Старт'
        }
    ]
};


