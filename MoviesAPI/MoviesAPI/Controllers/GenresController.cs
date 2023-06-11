using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers {

  [Route("api/genres")]
  [ApiController]
  public class GenresController : ControllerBase{

    private readonly ILogger logger;
    private readonly ApplicationDbContext context;

    public GenresController(ILogger<GenresController> logger, ApplicationDbContext context) {
      this.logger = logger;
      this.context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Genre>>> Get() {
      logger.LogInformation("Getting all the genres");
      return await context.Genres.ToListAsync();
    }

    [HttpGet("{Id:int}", Name = "getGenre")]
    public ActionResult<Genre> Get(int Id) {
      throw new NotImplementedException();
    }

    [HttpPost]
    public async Task<ActionResult> Post([FromBody] Genre genre) {
      context.Add(genre);
      await context.SaveChangesAsync();
      return NoContent();
    }

    [HttpPut]
    public ActionResult Put([FromBody] Genre genre) {
      throw new NotImplementedException();
    }

    [HttpDelete]
    public ActionResult Delete() {
      throw new NotImplementedException();
    }
  }
}
