/**
 * YoController
 *
 * @description :: Server-side logic for managing yoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res, next) {

	Like.create(likeObj, function likeCreated(err, like) {
		Like.publishCreate(like);

		Hacks.findOne({ _id: likeObj['postID'] }).exec(function(err, hack) { 
			hack.likeCount = hack.likeCount + 1;
			hack.save(function(err, hackSave) {
				res.redirect('/hacks/show/' + likeObj['postID']);
			});
		});		    		 		
	});
  }
};

