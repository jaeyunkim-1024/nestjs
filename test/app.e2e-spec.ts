import { Test, TestingModule } from '@nestjs/testing';
import { HttpCode, HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('MovieController e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({        
      whitelist : true,        
      forbidNonWhitelisted : true ,
      transform : true       
  }));
    await app.init();
  });

  describe("requestMapping '/movies' on MovieController",()=>{

    it("METHOD : GET , /movies -> invoke getAll() ",()=>{
      return request(app.getHttpServer())
        .get("/movies")
        .expect(HttpStatus.OK)
        .expect([]);
    });

    it("METHOD : POST  code : CREATED(201), /movies -> invoke createMovie(data) ",()=>{
        return request(app.getHttpServer())
          .post("/movies")
          .send({
            title : "E2E TEST",
            year  : 20201105,
            genres : ["a","b","c"]
          })
          .expect(HttpStatus.CREATED)          
    });

    it("METHOD : POST code : Bad Request(400), /movies -> invoke createMovie(data) ",()=>{
      return request(app.getHttpServer())
        .post("/movies") 
        .send({
          title : "not correct title" ,
          hacked : "hacked"
        })
        .expect(HttpStatus.BAD_REQUEST);
    });

    it("METHOD : DELETE , /movies -> invoke deleteMovie(numbeer)",()=>{
        return request(app.getHttpServer())
          .delete("/movies")          
          .expect(HttpStatus.NOT_FOUND);
    });
  });
  
  describe("/movies/:id",() => {    
    it("GET 200",()=>{
      return request(app.getHttpServer())
        .get("/movies/1") 
        .expect(HttpStatus.OK);
    });    

    it("GET 404",()=>{
      return request(app.getHttpServer())
        .get("/movies/4") 
        .expect(HttpStatus.NOT_FOUND);
    });    

    it("PATCH",()=>{
      return request(app.getHttpServer())
        .patch("/movies/1") 
        .send(
          {
            title : "Update Test"
          }
        )
        .expect(HttpStatus.OK);
    });    

    it("GET -> invoke getOne()",()=>{
      return request(app.getHttpServer())
        .get("/movies/1")       
        .expect(HttpStatus.OK);
    });    

    it("DELETE",()=>{
      return request(app.getHttpServer())
        .delete("/movies/1") 
        .expect(HttpStatus.OK);
    });    
  });

});


