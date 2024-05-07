let message = {
    messages: [
        'haiii :3 ', 
        'irisdex@proton.me       ', 
        'dex wuz here ', 
        'ruining the internet since 2019 ', 
        'wsg   ', 
        'forever unhittable ',
        'grrrrrrrrr ', 
        'irisware > all ', 
        'rip script-ware ', 
        'rip v3rmillion ', 
        'one day or day one? '
    ],
    up: true,
    index: 0,
    count: 0,
    start: function() {
        message.interval = setInterval(() => {
            if (message.count == message.messages[message.index].length) {
                message.up = false
                clearInterval(message.interval)
                setTimeout(message.start, 750)
            } else if (message.count == 1) {
                message.up = true
                message.index = message.index == message.messages.length -1 ? 0 : ++message.index
            }

            message.count = message.up ? ++message.count : --message.count
            document.getElementById('index_message').textContent = message.messages[message.index].slice(0, message.count)
        }, 75);
    }
}

message.start()