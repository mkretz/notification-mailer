var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();
var rabbitmqUri = appEnv.getServiceURL('notification-mq');
var smtpUri = appEnv.getServiceURL('notification-mail');
var amqp = require('amqplib/callback_api');

amqp.connect(rabbitmqUri, function(err, conn) {
    conn.createChannel(function(err, ch) {
        var queue = "notifications";
        ch.assertQueue(queue, {durable: false});
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        ch.consume(queue, function(msg) {
                console.log(JSON.parse(msg.content));
            });
        }, {noAck: true});
    });
