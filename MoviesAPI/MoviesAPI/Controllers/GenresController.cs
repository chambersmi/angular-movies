using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers {

  [Route("api/genres")]
  [ApiController]
  public class GenresController : ControllerBase {

    private readonly ILogger logger;
    private readonly ApplicationDbContext context;
    private readonly IMapper mapper;

    public GenresController(ILogger<GenresController> logger,
      ApplicationDbContext context, IMapper mapper) {
      this.logger = logger;
      this.context = context;
      this.mapper = mapper;
    }

    [HttpGet]
    public async Task<ActionResult<List<GenreDTO>>> Get() {

      logger.LogInformation("Getting all the genres");
      var genres = await context.Genres.OrderBy(x => x.Name).ToListAsync();
      return mapper.Map<List<GenreDTO>>(genres);


    }

    [HttpGet("{Id:int}", Name = "getGenre")]
    public async Task<ActionResult<GenreDTO> >Get(int Id) {

      var genre = await context.Genres.FirstOrDefaultAsync(x => x.Id == Id);

      if(genre==null) {
        return NotFound();
      }

      return mapper.Map<GenreDTO>(genre);
    }

    [HttpPost]
    public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO) {
      // Map genreCreationDTO
      var genre = mapper.Map<Actor>(genreCreationDTO);
      context.Add(genre);
      await context.SaveChangesAsync();
      return NoContent();
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult> Put(int id, [FromBody] GenreCreationDTO genreCreationDTO) {
      var genre = mapper.Map<Actor>(genreCreationDTO);
      genre.Id = id;
      // Acknowleding this already exists in DB, just calling it modified.
      context.Entry(genre).State = EntityState.Modified;
      await context.SaveChangesAsync();

      return NoContent();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(int id) {
      var genre = await context.Genres.FirstOrDefaultAsync(x => x.Id == id);

      if(genre==null) {
        return NotFound();
      }

      context.Remove(genre);
      await context.SaveChangesAsync();

      return NoContent();
    }
  }
}
