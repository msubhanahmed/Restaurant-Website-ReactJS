const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();
AWS.config.update();
const docClient = new AWS.DynamoDB.DocumentClient();

express = require('express');
router = express.Router();

router.route('/readUser/:id/:password').get((req, res) => {
  console.log("Read User Requeset for ID ",req.params.id);
  const params = {
    TableName: 'user_account',
    KeyConditionExpression: 'userid = :uid',
    ExpressionAttributeValues: {
      
      ':uid': Number(req.params.id),
    },
  };
  console.log(params);
  docClient.query(params, function(err, data) {
    if (err) {
      console.log(err);
      res.status(404);
      res.end();
    } else {
      //console.log(data.Items[0]);

      if (req.params.password == data.Items[0].password) {
        let userdata = {
          userid: data.Items[0].userid,
          username: data.Items[0].username,
          email: data.Items[0].email
        }
        res.json(userdata);
      }
      res.status(404);
      res.end();
    }
  });
})

router.route('/create-user').put(async (req, res, next) => {
  const user = req.body
  try {
    const params = {
      TableName: 'user_account',
      Item: user
    }
    let x = await docClient.put(params).promise();
    res.json(x)
  } catch (error) {
    return next(error)
  } 
});

// menu
router.route('/update-menu').put(async (req, res, next) => {
  const member = req.body
  console.log(member);
  member.menuid = 'menu'
  try {
    // const par = {
    //   TableName: 'Menu-List',
    //   KeyConditionExpression: 'menuid = :mid',
    //   ExpressionAttributeValues: {
    //     ':mid': 'menu',
    //   },
    // }

    // let hh = await docClient.delete(par).promise()

    const params = {
      TableName: 'Menu-List',
      Item: member
    }
    let y = await docClient.put(params).promise() 
    res.json(y)
  } catch (error) {
    return next(error)
  }
});


router.route('/readMenu').get((req, res) => {
  const params = {
    TableName: 'Menu-List',
    KeyConditionExpression: 'menuid = :mid',
    ExpressionAttributeValues: {
      ':mid': 'menu',
    },
  };
  docClient.query(params, function(err, data) {
    if (err) {
      res.status(404);
      res.end();
    } else {
        res.json(JSON.parse(data.Items[0].itemsMenu))
    }
  });
})

module.exports = router;

/*
// Get Single Student
router.route('/edit-student/:id').get((req, res) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      res.end();
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      res.end();
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})
// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      res.end(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
*/





/*
const params = {
  TableName: 'UserAccount',
  Item: {
    'userid' : {N: '1234'},
    'username' : {S: 'johndoe'},
    'email' : {S: 'johndoe@example.com'},
    'createdAt' : {S: new Date().toISOString()},
    'updatedAt' : {S: new Date().toISOString()},
  }
};

dynamodb.putItem(params, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});

const params = {
    TableName: 'UserAccount',
    KeyConditionExpression: 'userid = :uid',
    ExpressionAttributeValues: {
      ':uid': 1234,
    },
  };
  
  docClient.query(params, function(err, data) {
    if (err) {
      console.error('Error reading table:', err);
    } else {
      console.log('Item:', data.Items[0]);
    }
  });

*/
