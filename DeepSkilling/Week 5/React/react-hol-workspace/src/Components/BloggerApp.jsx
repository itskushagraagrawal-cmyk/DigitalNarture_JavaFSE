import React from 'react';
import './BloggerApp.css';

export const books = [
  {id: 101, bname: 'Master React', price: 670},
  {id: 102, bname: 'Deep Dive into Angular 11', price: 800},
  {id: 103, bname: 'Mongo Essentials', price: 450},
];

export const courses = [
  {id: 1, cname: 'Angular', date: '4/5/2021'},
  {id: 2, cname: 'React', date: '6/3/20201'}, // as in screenshot
];

export const blogs = [
  {id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.'},
];

function BloggerApp(props) {
  const bookdet = (
    <ul>
      {props.books.map((book) =>
        <div key={book.id}>
          <h3> {book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      )}
    </ul>
  );

  const coursedet = (
    <ul>
      {props.courses.map((course) =>
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <h4>{course.date}</h4>
        </div>
      )}
    </ul>
  );

  const content = (
    <ul>
      {props.blogs.map((blog) =>
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      )}
    </ul>
  );

  return (
    <div className="blogger-container">
      <div className="blogger-row">
        <div className="mystyle1 blogger-col">
          <h2>Course Details</h2>
          {coursedet}
        </div>
        <div className="st2 blogger-col border-left">
          <h2>Book Details</h2>
          {bookdet}
        </div>
        <div className="v1 blogger-col border-left">
          <h2>Blog Details</h2>
          {content}
        </div>
      </div>
    </div>
  );
}

export default BloggerApp;
