
function bot_ui_ini() {
    var botui = new BotUI("hello-mashiro")
    botui.message.add({
        delay: 800,
        content: "Hi,there"
    }).then(function () {
        botui.message.add({
            delay: 1100,
            content: "这里是 duan子"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "一个可爱的女孩子~"
            }).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "然后呢?",
                        value: "sure"
                    }, {
                        text: "少废话!",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })

    });
}
