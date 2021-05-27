using System.Collections.Generic;
using dotnet_react.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace dotnet_react.Controllers
{
    [Route("api/[controller]")]
    public class TodoController : Controller
    {

        [HttpGet]
        public List<string> Get()
        {
            List<string> weekDays = new List<string> { "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" };
            return weekDays;
        }

        [HttpGet("{id}")]
        public List<string> Get(int id)
        {
            List<string> weekDays = new List<string> { "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "satake", id.ToString() };
            return weekDays;
        }
    }
}
