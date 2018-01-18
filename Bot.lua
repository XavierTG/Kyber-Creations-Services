local discord = require('discordia')
local client = discord.Client()
local invitelink = ''
client:on('ready', function()
    invitelink = client:getInvite('403188478638292995')
    print(invitelink)
end)
client:run('NDAzMTg4NDc4NjM4MjkyOTk1.DUHbcg.Wjxdcbb6IDnHn0PWCmvmVCD9maA')
