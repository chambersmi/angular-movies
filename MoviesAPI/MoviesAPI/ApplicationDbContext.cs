using Microsoft.EntityFrameworkCore;
using MoviesAPI.Entities;
using System.Diagnostics.CodeAnalysis;

namespace MoviesAPI {
  public class ApplicationDbContext : DbContext {

    public ApplicationDbContext([NotNullAttribute] DbContextOptions options) : base (options) {
        
    }

    //Configure what tables we will have in our database
    public DbSet<Actor> Genres { get; set; }
    //public DbSet<Actor> Actors { get; set; }

  }
}
