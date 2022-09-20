const service = require("./reviews.service");
const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

/* Middleware function -> reviewExists validates whether the "review" exists or not */
async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
    const review = await service.read(reviewId);

    if (review) {
        res.locals.review = review;
        return next();
    }
    return next({ status: 404, message: `Review cannot be found.` });
};

//list function
async function list(req, res, next) {
  const data = await service.list(req.params.movieId);
  res.json({ data });
}

//update function
async function update(req, res, next) {
    const updatedReview = {
        ...req.body.data,
        review_id: res.locals.review.review_id,
    };
    const critic = await service.listCriticInfo(res.locals.review.critic_id);
    await service.update(updatedReview);
    const readUpdatedReview = await service.read(updatedReview.review_id);
    const data = {
        ...readUpdatedReview,
        critic,
    };
    res.json({ data });
};

//delete function
async function destroy(req, res) {
    await service.destroy(res.locals.review.review_id);
    res.sendStatus(204);
};

module.exports = {
    list: asyncErrorBoundary(list),
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
};