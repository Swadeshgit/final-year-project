const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
// const categorymodel = require('./model/addServiceModel');
const signupmodel = require('./model/signupmodel');
const bookmodel = require('./model/bookmodel');
const userloginmodel = require('./model/userlogin');
const userloginmodel1 = require('./model/userlogin1');
const emploginmodel = require('./model/userlogin1');
const addServiceModel = require('./model/addServiceModel');
const empblogmodel = require('./model/empblog');
const addempblog = require('./model/addempblog');
const comments = require('./model/comment');
const commentService = require('./model/ServiceComment');

const app = express();

// database cannection
const con = mongoose.connect('mongodb://127.0.0.1:27017/RisDB');
con.then(() => {
  console.log('Connection Done');
});
con.catch(() => {
  console.log('Connecton Not Done');
});
// database cannection
app.use(express.json());
app.use(cors());

app.use(express.static('text_pics'));

app.get('/addservice', async (req, res) => {
  const re = await addServiceModel.find();
  res.json(re);
});

// app.get('/emp/:id', async (req, res) => {
//   const re = await addServiceModel.find({ _id: req.params.id });
//   res.json(re);
// });

const mystorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'text_pics');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadcatpic = multer({
  storage: mystorage,
});
app.post('/addservice', uploadcatpic.single('catpic'), async (req, res) => {
  try {
    const re = new addServiceModel({
      SPid: req.body.SPid,
      name: req.body.catname,
      servicedis: req.body.serdis,
      otherservice: req.body.otherser,
      servicepic: req.file.filename,
    });
    if (await re.save()) {
      res.json({ msg: 'Record Saved' });
    } else {
      res.json({ msg: 'Error while saving..' });
    }
  } catch (e) {
    res.json({ msg: e.massege });
  }
});

app.delete('/addservice', async (req, res) => {
  // console.log(req.body.Delid);
  const re = await addServiceModel.findOneAndDelete({ _id: req.body.Delid });
  res.json({ msg: 'Record Deletedhhhd' });
});

app.delete('/emp', async (req, res) => {
  const re = await addServiceModel.findOneAndDelete({ _id: req.body.catid });
  res.json({ msg: 'Record Deleted' });
});

app.put('/emp', async (req, res) => {
  try {
    const re = await addServiceModel.findOneAndUpdate(
      { _id: req.body.catid },
      { categoryname: req.body.catname }
    );
    res.json({ msg: 'Record Saved' });
  } catch (e) {
    res.json({ msg: 'Somethig went wrong' });
  }
});

// app.post('/sig', async (req, res) => {
//   try {
//     const re = new signupmodel({
//       username: req.body.username,
//       email: req.body.email,
//       phone: req.body.phone,
//       digi: req.body.digi,
//       passwd: req.body.passwd,
//     });
//     console.log('helllo');
//     if (await re.save()) {
//       res.json({ msg: 'Record Saved' });
//     } else {
//       res.json({ msg: 'Error while saving..' });
//     }
//   } catch (e) {
//     res.json({ msg: 'somethingmmmmmmmmm worng' });
//   }
// });

// app.get('/sig', async (req, res) => {
//   const re = await signupmodel.find();
//   res.json(re);
// });

// app.patch('/psearch', async (req, res) => {
//   var regex = new RegExp(req.body.username, 'i');
//   const re = await signupmodel.find({ username: regex });
//   res.json(re);
// });

app.post('/book', async (req, res) => {
  try {
    const re = new bookmodel({
      CPid: req.body.CPid,
      CPemail: req.body.CPemail,
      CPcontect: req.body.CPcontect,
      CPname: req.body.CPname,
      CPaddress: req.body.CPaddress,
      Bookdate: 'req.body.Bookdate',
      Servicedate: req.body.Servicedate,
      Serviceid: req.body.Serviceid,
      SPid: req.body.SPid,
    });
    console.log('helllo');
    if (await re.save()) {
      res.json({ msg: 'Record Saved' });
    } else {
      res.json({ msg: 'Error while saving..' });
    }
  } catch (e) {
    res.json({ msg: e.message });
  }
});
app.get('/book', async (req, res) => {
  const re = await bookmodel.find();
  res.json(re);
});

app.delete('/book', async (req, res) => {
  // console.log(req.body.Delid);
  const re = await bookmodel.findOneAndDelete({ _id: req.body.Delid });
  res.json({ msg: 'Record Deleted' });
});

app.use(express.static('User_pics'));
const mystorage1 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'User_pics');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadcatpic1 = multer({
  storage: mystorage1,
});

app.get('/userSignup', async (req, res) => {
  const re = await userloginmodel.find();
  res.json(re);
});

app.delete('/userSignup', async (req, res) => {
  // console.log(req.body.Delid);
  const re = await userloginmodel.findOneAndDelete({ _id: req.body.Delid });
  res.json({ msg: 'Record Deleted' });
});

app.patch('/pu', async (req, res) => {
  // console.log(req.body.Uid);
  const re = await userloginmodel.find({ _id: req.body.Uid });
  res.json(re);
});

app.get('/empSignup', async (req, res) => {
  const re1 = await emploginmodel.find();
  res.json(re1);
});

app.delete('/empSignup', async (req, res) => {
  // console.log(req.body.Delid);
  const re = await emploginmodel.findOneAndDelete({ _id: req.body.Delid });
  res.json({ msg: 'Record Deleted' });
});

app.put('/userSignup', async (req, res) => {
  try {
    const re = await emploginmodel.findOneAndUpdate(
      { _id: req.body.empid },
      {
        address: req.body.address,
        servicetype: req.body.servicetype,
        oulification: req.body.oulification,
        exp: req.body.exp,
        yearexp: req.body.yearexp,
        company: req.body.company,
        single: req.body.single,
      }
    );
    res.json({ msg: 'Record Saved' });
  } catch (e) {
    res.json({ msg: 'Somethig went wrong' });
  }
});
app.post('/userSignup', uploadcatpic1.single('userpic'), async (req, res) => {
  try {
    if (req.body.OpLog === 'User') {
      console.log(req.body.OpLog);
      const re = new userloginmodel({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        conpassword: req.body.conpassword,
      });
      if (await re.save()) {
        // await re1.save();
        res.json({ msg: 'Record Saved' });
      } else {
        res.json({ msg: 'Error while saving..' });
      }
    } else {
      const re1 = new emploginmodel({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        conpassword: req.body.conpassword,
        ///
        address: req.body.address,
        servicetype: req.body.servicetype,
        oulification: req.body.oulification,
        exp: req.body.exp,
        yearexp: req.body.yearexp,
        company: req.body.company,
        single: req.body.single,
        ///
      });
      if (await re1.save()) {
        // await re1.save();
        res.json({ msg: 'Record Saved' });
      } else {
        res.json({ msg: 'Error while saving..' });
      }
    }
  } catch (e) {
    res.json({ msg: e.message });
  }
});

app.patch('/SERVICEsearch', async (req, res) => {
  var regex = new RegExp(req.body.SPid, 'i');
  const re = await addServiceModel.find({ SPid: regex });
  res.json(re);
});

app.get('/serget', async (req, res) => {
  const re1 = await addServiceModel.find();
  res.json(re1);
});

app.patch('/pe', async (req, res) => {
  const re = await emploginmodel.find({ _id: req.body.Uid });
  res.json(re);
});

const mystow = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'text_pics');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadpic = multer({
  storage: mystow,
});
app.post('/SPblog1', uploadpic.single('catpic'), async (req, res) => {
  try {
    const re = new addempblog({
      SPid: req.body.SPid,
      keyword: req.body.catname,
      para: req.body.serdis,
      titel: req.body.otherser,
      topicimg: req.file.filename,
    });
    if (await re.save()) {
      res.json({ msg: 'Record Saved' });
    } else {
      res.json({ msg: 'Error while saving..' });
    }
  } catch (e) {
    res.json({ msg: e.massege });
  }
});

// app.post('/SPblog2', uploadpic.single('catpic1'), async (req, res) => {
//   try {
//     const re = new addempblog({
//       SPid: req.body.SPid,
//       name: req.body.catname,
//       servicedis: req.body.serdis,
//       otherservice: req.body.otherser,
//       servicepic: req.file.filename,
//     });
//     if (await re.save()) {
//       res.json({ msg: 'Record Saved' });
//     } else {
//       res.json({ msg: 'Error while saving..' });
//     }
//   } catch (e) {
//     res.json({ msg: e.massege });
//   }
// });
// app.post('/SPblog3', uploadpic.single('catpic'), async (req, res) => {
//   try {
//     const re = new addempblog({
//       SPid: req.body.SPid,
//       name: req.body.catname,
//       servicedis: req.body.serdis,
//       otherservice: req.body.otherser,
//       servicepic: req.file.filename,
//     });
//     if (await re.save()) {
//       res.json({ msg: 'Record Saved' });
//     } else {
//       res.json({ msg: 'Error while saving..' });
//     }
//   } catch (e) {
//     res.json({ msg: e.massege });
//   }
// });

app.patch('/SPblog1', async (req, res) => {
  const re = await addempblog.find({ SPid: req.body.Uid });
  res.json(re);
});
app.patch('/SPblog11', async (req, res) => {
  const re = await addempblog.find({ _id: req.body.Uid });
  res.json(re);
});

app.get('/blog', async (req, res) => {
  const re1 = await addempblog.find();
  res.json(re1);
});

app.delete('/blog', async (req, res) => {
  // console.log(req.body.Delid);
  const re = await addempblog.findOneAndDelete({ _id: req.body.Delid });
  res.json({ msg: 'Record Deleted' });
});

//emp blog
///comments

app.post('/comments', async (req, res) => {
  try {
    const re = new comments({
      reqid: req.body.reqid,
      blogid: req.body.blogid,
      name: req.body.name,
      message: req.body.message,
    });
    if (await re.save()) {
      res.json({ msg: 'Record Saved' });
    } else {
      res.json({ msg: 'Error while saving..' });
    }
  } catch (e) {
    res.json({ msg: 'something worng' });
  }
});

app.post('/commentsSer', async (req, res) => {
  try {
    const re = new commentService({
      reqid: req.body.reqid,
      blogid: req.body.blogid,
      name: req.body.name,
      message: req.body.message,
    });
    if (await re.save()) {
      res.json({ msg: 'Record Saved' });
    } else {
      res.json({ msg: 'Error while saving..' });
    }
  } catch (e) {
    res.json({ msg: 'something worng' });
  }
});

app.patch('/commentsSer', async (req, res) => {
  const re = await commentService.find({ blogid: req.body.SPid });
  res.json(re);
});

app.get('/comments', async (req, res) => {
  const re1 = await comments.find();
  res.json(re1);
});

app.patch('/comments', async (req, res) => {
  const re = await comments.find({ blogid: req.body.blogid });
  res.json(re);
});

app.delete('/comments', async (req, res) => {
  const re = await comments.findOneAndDelete({ _id: req.body.Deletid });
  res.json({ msg: 'Record Deleted' });
});
///

app.listen(7999, () => {
  console.log('Server Started is 7999');
});
