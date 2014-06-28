/**
 * YoController
 *
 * @description :: Server-side logic for managing yoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res, next) {

	var yoObj = {
      user: req.param('username')
    }

	Yo.create(yoObj, function likeCreated(err, yo) {
		Yo.publishCreate(yo);	    		 		
	});
  }
};

