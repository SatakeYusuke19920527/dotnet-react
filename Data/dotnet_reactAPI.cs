using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using dotnet_react;

    public class dotnet_reactAPI : DbContext
    {
        public dotnet_reactAPI (DbContextOptions<dotnet_reactAPI> options)
            : base(options)
        {
        }

        public DbSet<dotnet_react.Product> Product { get; set; }
    }
