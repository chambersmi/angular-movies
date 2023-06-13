using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers {

  [Route("api/actors")]
  [ApiController]
  public class ActorsController : ControllerBase {

    private readonly ApplicationDbContext context;
    private readonly IMapper mapper;
    private readonly IFileStorageService fileStorageService;
    private readonly string containerName = "actors";

    public ActorsController(IMapper mapper,
      IFileStorageService fileStorageService) {

      this.mapper = mapper;
      this.fileStorageService = fileStorageService;
    }

    [HttpGet]
    public async Task<ActionResult<List<ActorDTO>>> Get() {

      return NoContent();
      //var actors = await context.Actors.ToListAsync();
      //return mapper.Map<List<ActorDTO>>(actors);

    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<List<ActorDTO>>> Get(int id) {

      //var actor = await context.Actors.FirstOrDefaultAsync(x => x.Id == id);
      //if(actor == null) {
      //  return NotFound();
      //}
      //return mapper.Map<List<ActorDTO>>(actor);

      return NoContent();
    }

    [HttpPost]
    public async Task<ActionResult> Post([FromForm] ActorCreationDTO actorCreationDTO) {
      var actor = mapper.Map<Actor>(actorCreationDTO);

      if(actorCreationDTO.Picture != null) {
        actor.Picture = await fileStorageService.SaveFile(containerName, actorCreationDTO.Picture);
      }

      context.Add(actor);
      await context.SaveChangesAsync();
      return NoContent();

    }

    [HttpPut]
    public async Task<ActionResult> Put([FromBody] ActorCreationDTO actorCreationDTO) {
      return NoContent();
      throw new NotImplementedException();
    }

    [HttpDelete("{id:int}")]
    public async Task<ActionResult> Delete(int id) {

      //var actor = await context.Actors.FirstOrDefaultAsync(x => x.Id == id);
      //if (actor == null) {
      //  return NotFound();
      //}
      //context.Remove(actor);
      //await context.SaveChangesAsync();

      return NoContent();
    }

    

  }
}

