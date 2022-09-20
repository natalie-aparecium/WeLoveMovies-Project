const knex = require("../../db/connection");
const mapProperties = require("../../utils/map-properties");

//this function will map the properties of the critic object
const objectCritic = mapProperties({
    critic_id: "critic.critic_id",
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name",
    created_at: "critic.created_at",
    updated_at: "critic.updated_at",
});

//this function will return the review for the specified review_id
function read(reviewId) {
    return knex("reviews")
        .select("*")
        .where({ review_id: reviewId })
        .first();
};

//this function will return the reviews, with critic property, for the specified movie_id
function list(movieId) {
    return knex("reviews as r")
      .join("critics as c", "r.critic_id", "c.critic_id")
      .select("*")
      .where({ movie_id: movieId })
      .then((criticProperty) => criticProperty.map(objectCritic));
}

//this function will update the given review
function update(updatedReview) {
    return knex("reviews")
        .where({ review_id: updatedReview.review_id })
        .update(updatedReview, "*")
};

//this function will list the information of a critic
function listCriticInfo(criticId) {
    return knex("critics as c")
      .select("*")
      .where({critic_id: criticId })
      .first();
};

//this functions will delete a review given a review id
function destroy(reviewId) {
    return knex("reviews")
      .where({review_id: reviewId})
      .del();
}

module.exports = {
    read,
    list,
    update,
    destroy,
    listCriticInfo,
};