using System;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;

namespace dotnet_react.Hubs
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.SignalR;

    public class ChatHub: Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message, user);
        }
    }
}
