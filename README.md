# notification-mailer
CF sample application mailer
## Installation
1. Install [notification-api](https://github.com/mkretz/notification-api)
2. Clone the repo
```
git clone https://github.com/mkretz/notification-mailer.git
cd notification-mailer
```
3. Create a user provided service called `notification-mail`
```
cf create-user-provided-service notification-mail -p "url,toAddress"
```
For the parameter `url` enter the SMTP URL of the mailserver you want to use. For a Mailgun sandbox domain this would be something like `smtp://postmaster@<mailgun-user>:<mailgun-password>@smtp.mailgun.org:587`. For the parameter `toAddress` enter the email address you want to send notifications to.

4. Push the app
```
cf push
```
