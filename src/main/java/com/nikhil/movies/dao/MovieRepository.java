package com.nikhil.movies.dao;

import com.nikhil.movies.model.Movie;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    // For creating custom queries
    // Spring is smart enough to understand the custom query we
    // to create
    Optional<Movie> findMovieByImdbId(String imdbId);
}
