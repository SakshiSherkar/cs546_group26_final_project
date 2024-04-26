// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

router
  .route('/:propertyId')
  .get(async (req, res) => {
    //code here for GET
    
  })
  .post(async (req, res) => {
    //code here for POST
  });

router
  .route('/comment/:commentId')
  .get(async (req, res) => {
    //code here for GET
  })
  .patch(async (req, res) => {
    //code for PATCH
  })
  .delete(async (req, res) => {
    //code here for DELETE
  });
