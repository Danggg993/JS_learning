// function User(Name, Age) {
//     this.Name = Name;
//     this.Age = Age;
// }

// User.Name

// var A = new User('NguyenVanA', 19);

// var limitItem = ['Qủy thần kiếm', 'Bán nguyệt đao', 'Thủy liêm kích'];

// function getRandomItem(limitItem) {
//     return limitItem[Math.floor(Math.random() * limitItem.length)]
// };

// // console.log(getRandomItem(limitItem))

// function getRandNumbers(min, max, length) {
//     var array = [];
//     for(var i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * (max - min) + min));
//     };
//     return array;
// };

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// function getTotal(orders) {
//     var ordersLength = orders.length;
//     var totalPrice = 0;

//     for (var i = 0; i < ordersLength; i++) {
//         totalPrice = totalPrice + orders[i].price;
//     }

//     return totalPrice;
// }

// // Expected results:
// getTotal(orders) // Output: 8700000

// function run(object) {
//     var array = [];
    
//     for (var key in object) {
//         array.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//     };
    
//     return array;
// };
// // Expected results:
// // console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]

// var user = {
//     Name: '18',
//     Age: '20',
// };

// var arrUser = Object.keys(user);

// // console.log(arrUser)


// function CD(num) {
//     if (num > 0) {
//         console.log(num)
//         return CD(num - 1);
//     }
//     return num;
// }

// // console.log(CD(5));

// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport(sports) {
//     return sports.filter(function(element) {
//         return element.like > 5;
//     });
// }


// // Kỳ vọng
// // console.log(getMostFavoriteSport(sports)) 
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
// ];
  
// function calculateRating(watchList) {
//     var filmsOfNolan = watchList.filter(function(film) {
//         return film["Director"] == "Christopher Nolan";
//     });

//     var NolanIMDB = filmsOfNolan.reduce(function(imdb, filmOfNolan) {
//         return (imdb + Number(filmOfNolan["imdbRating"]));
//     }, 0);

//     return NolanIMDB/filmsOfNolan.length;
// };
  
  
// // Expected results
// // console.log(calculateRating(watchList)); // Output: 8.675  


// function arrToObj(arr) {
//     return arr.reduce(function(object,[a,b]) {
//         object[a] = b;
//         return object;
//     }, {});
// };

// var arr = [
//     ['name', 'Sơn Đặng'],
//     ['age', 18],
// ];
// console.log(arrToObj(arr));

// Array.prototype.myMap = function(cb) {
//     var Obj = [], arrayLength = this.length;

//     for (var i = 0; i < arrayLength; ++i) {
//         var result = cb(this[i], i);
//         Obj.push(result);
//     };

//     return Obj;
// }

// Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

// // Bài tập tạo hàm foEach2, Filter, ...........


// Array.prototype.myforEach = function(cb) {
//     var arrayLength = this.length;

//     for (var i = 0; i < arrayLength; ++i) {
//         cb(this[i], i);
//     };

//     return ;
// }

// const numbers = [1, 2, 3];
// var a = [];
// numbers.myforEach(function(number, index) {
//     return a.push(number);
// });

// console.log(a);

// Array.prototype.myFilter = function(cb) {
//     var Obj = [];

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = cb(this[index], index, this);
//             if (result) {
//                 Obj.push(this[index]);
//             };
//         }
//     }

//     return Obj;
// }



// // Expected results:

// const numbers = [1, 2, 3, 4];

// console.log(numbers.myFilter(function (number) {
//     return number % 2 === 0;
// })); Output: [2, 4]

// console.log(numbers.myFilter(function (number, index) {
//     return index % 2 === 0;
// })); Output: [1, 3]

// console.log(numbers.myFilter(function (number, index, array) {
//     return array.length % 2 === 0;
// })); Output: [1, 2, 3, 4]

// var heading = document.getElementById('heading');

// heading.className = 'red-color';

// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     var listItem = courses.map(function(course, index) {
//         return `<li>${course}</li>`;
//     })
//     return document.getElementsByClassName('courses-list')[0].innerHTML = listItem.join('');
// }

// render(courses);

// var heading = document.getElementById('heading');

// console.log(heading.classList);

// var btn = document.querySelector('button');

// var btnColor = ['red', 'green', 'blue'];
// var i = 0;

// btn.addEventListener('click', function() {
//     btn.style.backgroundColor = btnColor[i];
//     i++
//     i >= btnColor.length ? i = 0: i;
// });

// setTimeout(function () {
//     btnColor.pop();
// }, 3000)

// var btnMenuOpen = document.getElementById('btnMenuOpen');
// var btnMenuClose = document.getElementById('btnMenuClose');
// var menu = document.getElementById('mainMenu');
// var Btn = document.getElementById('Btn');


// btnMenuOpen.onclick = function() {
//     menu.classList.add('displayBlock')
// };


// btnMenuClose.onclick = function() {
//     menu.classList.remove('displayBlock')
// };


// setTimeout(function() {
//     console.log('Dòng này sẽ in ra sau')
// }, 0)
// // setTimeout là tác vụ bất động bộ (async)

// console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

// var promise = new Promise(
//     function(resolve, reject) {
//         resolve();
//     }
// ) 

// console.log(promise)

// promise.then(function() {
//     console.log(1)
// }). catch(function() {
//     console.log(2)
// }).finally(function() {
//     console.log(3)
// })


// function hell(value, cb) {
//     cb(value);
// }

// // Không sử dụng Promise dẫn đến tạo ra callback hell 
// hell(1, function (valueFromA) {
//     hell(valueFromA + 1, function (valueFromB) {
//         hell(valueFromB + 1, function (valueFromC) {
//             hell(valueFromC + 1, function (valueFromD) {
//                 console.log(valueFromD + 1);
//             });
//         });
//     });
// });

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
// function notHell(value) {
//     return new Promise(function (resolve) {
//         resolve(value);
//     });
// }

// notHell(1)
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value + 1);
//     });

// May tinh tuoi
// var userAge = document.querySelector('input[type = "number"]');
// var submit = document.querySelector('button[type = "submit"]');
// var box = document.querySelector('.box');

// var result;

// submit.onclick = function() {
//     result = userAge.value;
//     result ? box.innerText = `Tuổi của bạn là ${result}`: box.innerText = "Lỗi!";
// };

// userAge.onfocus = function() {
//     userAge.onkeydown = function(event) {
//         if(event.code === 'Enter') {submit.onclick()};
//     };
// };





// Comment Box
// var userComments = document.querySelector('.comment-box ul')

// var users =  [
//     {
//         avatar: 'https://files.fullstack.edu.vn/f8-prod/user_photos/218482/62c115f0480d1.jpg',
//         userName: 'MDang',
//         id: 0
//     },
//     {
//         avatar: 'https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png',
//         userName: 'Kien Dam',
//         id: 1
//     },
//     {
//         avatar: 'https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png',
//         userName: 'Son Dang',
//         id: 2
//     },
//     {
//         avatar: 'https://files.fullstack.edu.vn/f8-prod/user_photos/290301/63de6a88d4dc7.jpg',
//         userName: 'NT Quynh',
//         id: 3
//     },
//     {
//         avatar: 'https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png',
//         userName: 'PTG',
//         id: 4
//     },
//     {
//         avatar: 'https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png',
//         userName: 'NoName',
//         id: 5
//     },
// ];

// var comments = [
//     {
//         id: 1,
//         userId: 1,
//         content: 'Anh chua ra video :('
//     },
//     {
//         id: 2,
//         userId: 2,
//         content: 'Vua co video moi roi em'
//     },
//     {
//         id: 3,
//         userId: 3,
//         content: 'Thanks <3'
//     },
// ];

// Cach 1????????
// var getUserComments = new Promise((resolve) => {
//     var userIdComments = comments.map((comment) => {
//         return comment.userId;
//     })
    
//     resolve(userIdComments)
// });

// getUserComments
//     .then((userIdComments) => {
//         users.forEach((user) => {
//             if(userIdComments.includes(user.id)) {
//                 let userContent = comments.find((comment) => {return comment.userId === user.id});
//                 userComments.innerHTML += `<li><div class="userInfor"><a href="#"><img src="${user.avatar}" alt=""><div class="user-name">${user.userName}</div></a></div><div class="content">${userContent.content}</div></li>`;
//             }
//         })
//     })


// Cach 2????????
// var addComment = new Promise(function(resolve) {
//     comments.forEach((comment) => {
//         let user = users.find((user) => user.id === comment.userId)
//         userComments.innerHTML += `<li><div class="userInfor"><a href="#"><img src="${user.avatar}" alt=""><div class="user-name">${user.userName}</div></a></div><div class="content">${comment.content}</div></li>`;
//     })
// })

// var addComment = new Promise(function(resolve) {
//     comments.forEach((comment) => {
//         let user = users.find((user) => user.id === comment.userId)
//         userComments.innerHTML += `<li><div class="userInfor"><a href="#"><img src="${user.avatar}" alt=""><div class="user-name">${user.userName}</div></a></div><div class="content">${comment.content}</div></li>`;
//     })
// })

// var commentContent = document.querySelector('input[type = "text"]');
// var submit = document.querySelector('button[type = "submit"]');
    
// function postComment() {
//     let content;
//     if (commentContent.value) {
//         content = commentContent.value
//     }
//     else {
//         return ;
//     };
//     let commentsLength = comments.length;
//     comments.push({
//         id: commentsLength + 1,
//         userId: 0,
//         content: content
//     })
//     new Promise(function(resolve) {
//         let user = users.find((user) => user.id === 0)
//         userComments.innerHTML += `<li><div class="userInfor"><a href="#"><img src="${user.avatar}" alt=""><div class="user-name">${user.userName}</div></a></div><div class="content">${content}</div></li>`;
//     })
//     commentContent.value = '';
// }

// submit.onclick = () => {postComment()}

// commentContent.onkeydown = (event) => {
//     if(event.code === 'Enter') {
//         postComment()
//     }
// }

// Courses Management?
//  //////////  //////////  //      //  //////////  //////////  //////////
//  //          //      //  //      //  //          //          //
//  //          //      //  //      //  //          //          //
//  //          //      //  //      //  //////////  //////////  //////////
//  //          //      //  //      //          //  //                  //
//  //          //      //  //      //          //  //                  //
//  //////////  //////////  //////////  //////////  //////////  //////////

// var coursesAPI = 'http://localhost:3000/courses';


// function start() {
//     getCourses(renderCourses);

//     handleCreateForm()
// }

// start();

// // Function
// function getCourses(callback) {
//     fetch(coursesAPI)
//         .then(function(respon) {
//             return respon.json();
//         })
//         .then(callback)
// }

// function CreateCourse(data, callback) {
//     var options = {
//         method: "POST",
//         headers: {
//             'Content-Type': 'Application/json'
//         },
//         body: JSON.stringify(data)
//     }
//     fetch(coursesAPI, options)
//         .then(function(respon) {
//             //return
//             respon.json();
//         })
//         .then(callback);
// }

// function handleDeleteCourses(id) {
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'Application/json'
//         }
//     }
//     fetch(`${coursesAPI}/${String(id)}`, options)
//         .then(function(respon) {
//             respon.json();
//         })
//         .then(function() {
//             var courseItem = document.querySelector('.course-item-' + `${id}`);
//             if(courseItem) {
//                 courseItem.remove();
//             };
//         });
// }

// function handleEditCourses(id) {
//     fetch(`${coursesAPI}/${id}`)
//         .then(function(respon) {
//             return respon.json()
//         })
//         .then(function(courseEditing) {
//             let nameEditing = document.querySelector('input[name="name"]');
//             nameEditing.value = courseEditing.name;
//             let descriptionEditing = document.querySelector('input[name="description"]');
//             descriptionEditing.value = courseEditing.description;
//             var createBtn = document.querySelector('button#create');

//             createBtn.style.display = 'none';

//             var editBtn = document.querySelector('button#edit');

//             editBtn.style.display = 'block';

//             var btnCancelEditing = document.querySelector('#cancel-editing')

//             btnCancelEditing.style.display = 'block';

//             editBtn.onclick = function() {
//                 if(!nameEditing.value) {
//                     return ;
//                 }
//                 editCourses(id, nameEditing, descriptionEditing, createBtn, editBtn, btnCancelEditing);
//             }

//             btnCancelEditing.onclick = function() {
//                 createBtn.style.display = 'block';
//                 editBtn.style.display = 'none';
//                 btnCancelEditing.style.display = 'none';

//                 resetValueCreateForm();

//                 // editBtn.onclick = function() {}
//             }
//         })
// }

// function editCourses(id, nameEditing, descriptionEditing, createBtn, editBtn, btnCancelEditing) {

//     let formData = {
//         name: nameEditing.value,
//         description: descriptionEditing.value
//     }

//     let options = {
//         method: 'PATCH',
//         body: JSON.stringify(formData)
//     }

//     fetch(`${coursesAPI}/${id}`, options)
//         .then(function(respon) {
//             return respon.json()
//         })
//         .then(function(courseEditing) {
//             document.querySelector('.course-item-' + id + ' h4').innerText = courseEditing.name;
//             document.querySelector('.course-item-' + id + ' p').innerText = courseEditing.description;
//             createBtn.style.display = 'block';
//             editBtn.style.display = 'none';
//             btnCancelEditing.style.display = 'none';

//             resetValueCreateForm();
//         })
// }

// function renderCourses(courses) {
//     var listCoursesBlock = document.querySelector('#list-courses');
//     var html = '';
//     courses.forEach(function(course) {
//         html += 
//         `
//             <li class='course-item-${course.id}'>
//                 <h4>${course.name}</h4>
//                 <p>${course.description}</p>
//                 <button onclick="handleDeleteCourses('${course.id}')">Xóa</button>
//                 <button onclick="handleEditCourses('${course.id}')">Chỉnh sửa</button>
//             </li>
//         `
//     });
//     listCoursesBlock.innerHTML = html;
// }

// function handleCreateForm() {
//     var createBtn = document.querySelector('#create')

//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;

//         if(!name) {
//             return ;
//         }

//         var formData = {
//             name: name,
//             description: description
//         }

//         CreateCourse(formData, function() {
//             getCourses(renderCourses)
//         })

//         // C2: function(course) {renderCourses(courses)}
//         // listCoursesBlock.innerHTML += html;

//         resetValueCreateForm();
//     }
// }

// function resetValueCreateForm() {
//     document.querySelector('input[name="name"]').value = '';
//     document.querySelector('input[name="description"]').value = '';
// };

// Bài tập
// Done!

// function highlight([a, ...b], ...c) {
//     console.log(a,b,c)
// }

// var course = 'JavaScript', nameT = 'F8'

// highlight`HLC ${course} tai ${nameT}!`

// import * as des from './app.js'

// console.log(des.c)

// export {a} from './app.js'

// var a = [1,2,3]

// console.log(a[3]?.())

//  ///    ///  //      //    //////    //    ////// 
//  // // ////  //      //  //      //  //  //      //
//  //  //  //  //      //    ///       //  //
//  //      //  //      //       ///    //  //
//  //      //  //      //  //      //  //  //      //
//  //      //  //////////    //////    //    //////

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
    // config: {},
    // (1/2) Uncomment the line below to use localStorage
    // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
    songs: [
    {
        name: "Nevada",
        singer: "Cozi Zuehlsdorff",
        path: "./y2mate.com - Vicetone  Nevada ft Cozi Zuehlsdorff.mp3",
        image: "https://i.scdn.co/image/ab67616d0000b273a77236d5841acfa22dbd79da"
    },
    {
        name: "Thằng Điên",
        singer: "JUSTATEE x PHƯƠNG LY",
        path: "./y2mate.com - THẰNG ĐIÊN  JUSTATEE x PHƯƠNG LY  OFFICIAL MV.mp3",
        image: "https://i1.sndcdn.com/artworks-r69juSNvR6HpKqfD-5DRVTg-t500x500.jpg"
    },
    {
        name: "Đừng làm trái tim anh đau",
        singer: "SƠN TÙNG MTP",
        path: "./y2mate.com - SƠN TÙNG MTP  ĐỪNG LÀM TRÁI TIM ANH ĐAU  OFFICIAL MUSIC VIDEO.mp3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIoy3jYMiZv_qFfulpOSIStZn1ECvxjp-tGQ&s"
    },
    {
        name: "YOASOBI夜に駆ける",
        singer: "YOASOBI",
        path: "./y2mate.com - YOASOBI夜に駆ける Official Music Video.mp3",
        image: "https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7"
    },
    {
        name: "Xomu",
        singer: "Lanterns",
        path: "./y2mate.com - Xomu  Lanterns.mp3",
        image: "https://i1.sndcdn.com/artworks-000347774796-dy8ib4-t500x500.jpg"
    },
    {
        name: "Runaway",
        singer: "AURORA",
        path: "./y2mate.com - AURORA  Runaway.mp3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDiBo81_ot46oBr-Jh7WRdoxZ56iUTfLghw&s"
    },
    {
        name: "How To Love",
        singer: "Cash Cash ft Sofia Reyes",
        path: "./y2mate.com - How To Love  Cash Cash ft Sofia Reyes Lyrics  Vietsub .mp3",
        image: "https://i.ytimg.com/vi/jrw6iE1UOHg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDN-BD0Y0EyqZbAQNmkn1gX-CX0nw"
    },
    {
        name: "Moog City",
        singer: "C418",
        path: "./y2mate.com - C418  Moog City  Minecraft Volume Alpha.mp3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3W_gkq-HFCMnB5-EFBE1TTAk57QMGhIVcXw&s"
    },
    {
        name: "Cure For Me",
        singer: "AURORA",
        path: "./y2mate.com - AURORA  Cure For Me.mp3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8L3RofjuXPXevY-iS5Y6jZQzeOQZVUxjcg&s"
    },

    ],
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    
    // onclick="app.activeSong(${index})" Tự làm, có lỗi
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active': ''}" data-index="${index}">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })

        playlist.innerHTML = htmls.join('')
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    
    //start() {} 
    handleEvents: function() {
        const _this =this
        const cdWidth = cd.offsetWidth

        // Xử lí cd thumbnail
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        })

        cdThumbAnimate.pause()

        // Xử lí phóng to/ thu nhỏ CD
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            let newCdWidth = cdWidth - scrollTop

            
            cd.style.width = newCdWidth>0? newCdWidth + 'px': 0
            cd.style.opacity = newCdWidth>0? newCdWidth/cdWidth:0
        }

        // Xử lí khi click play
        playBtn.onclick = function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        }

        // Khi song được play
        audio.onplay = function() {
            _this.isPlaying = 1;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }
        
        // Khi song được pause
        audio.onpause = function() {
            _this.isPlaying = 0;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPersec = Math.floor((audio.currentTime / audio.duration) *100)
                progress.value = progressPersec
            }
        }

        // Xứ lí khi tua song
        progress.oninput = function(e) {
          const seekTime = progress.value * audio.duration / 100
          audio.currentTime = seekTime;
        }

        // Xử lí khi next song
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong()
            }
            audio.play();
            _this.render()
            _this.scollToActiveSong()
        }
        
        // Xử lí khi prev song
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            }
            audio.play();
            _this.render()
            _this.scollToActiveSong()
        }

        // Xử lí bật / tắt random song
        randomBtn.onclick = function(event) {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom)
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Xử lí khi audio onended
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.onclick()
            }
        }

        // Xử lí lặp lại song
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat', _this.isRepeat)
            this.classList.toggle('active', _this.isRepeat)
        }

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function(e) {
            let songNode = e.target.closest('.song:not(.active)')
            let b = e.target.closest('div.option')
            if (songNode && !b) {
                $('.song.active').classList.remove('active')
                songNode.classList.add('active')
                // _this.currentIndex = Number(a.attributes[1].value)  // Cách 1
                // _this.currentIndex = songNode.getAttribute('data-index') // Cách 2
                _this.currentIndex = songNode.dataset.index // Cách 3
                _this.loadCurrentSong()
                audio.play()
            }
        }
    },
    scollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest', 
                end: 'start'
            })
        }, 50)
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom // Lỗi và tự sửa xong??? 
        this.isRepeat = this.config.isRepeat
        // this.isRandom = JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)).isRandom

        // if (this.isRandom) {
        //     randomBtn.classList.add('active')
        // }

        // if (this.isRepeat) {
        //     repeatBtn.classList.add('active')
        // }
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    // Xử lí khi active song !!! Tự làm, có lỗi
    // activeSong: function(index) {
    //     if (index === this.currentIndex) {
    //         return ;
    //     }
    //     this.currentIndex = index
    //     this.loadCurrentSong()
    //     this.render()
    //     audio.play()
    // },


    start: function() {
        // Gán cấu hình từ Config vào ứng dụngs
        this.loadConfig()

        // Định nghĩa các thuộc tính cho Object
        this.defineProperties()

        // Lắng nghe/ Xử lí các sự kiện
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên vào UI khi chay ung dung
        this.loadCurrentSong()

        // Render Playlist
        this.render()

        // Hiển thị trạng thái ban đầu của button repeat & random
        randomBtn.classList.toggle('active', this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)




    },

      
}

app.start()


//ANIMATE OBJECT
//ANIMATE OBJECT
//ANIMATE OBJECT
//ANIMATE OBJECT
//ANIMATE OBJECT
//ANIMATE OBJECT

// tránh lặp lại các bài hát đã phát trước đó khi random
// scollIntoView




























































































































    













    

