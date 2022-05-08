import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5 p-3'>
            <h4> Difference between javascript and nodejs</h4>
            <p>Javascript is a popular programming language and it runs in  web browser.Javascript is mainly used for any client side activity for the web application. <br />
            On the other hand, Node.js is an like useful libraries which JS programming can be used separately and outside the browser for the server side. Nodejs only support the V8 engine that is specific to the googles chrome. Node.js is written in the C++, and provides V8 engine base that helps developers to run the written program of javascript in any browser environment
</p>
<h4> When should you use nodejs and when should you use mongodb</h4>
<p> Node.js is especially suited for applications where you'd like to maintain a persistent connection from the browser back to the server. <br />
MongoDB is absolutely not a good tool for every type of data. MongoDB is a great database for web applications, especially if the application is less interactive.
</p>
<h4> Differences between sql and nosql databases.</h4>
<p>
SQL databases are vertically scalable. SQL Databases are categorized as Relational Database Management System (RDBMS).SQL databases have fixed or static or predefined schema. <br />
On the other hand,NoSQL databases are horizontally scalable.NoSQL databases are categorized as Non-relational or distributed database system.

</p>
<h4>Whatever question i try to write on stackoverflow ,I always find simillar question someone asked already.</h4>
<img className='img-fluid' src="https://i.ibb.co/Qm3Pk2J/Screenshot-1.png" alt="" srcset="" />

        </div>
    );
};

export default Blogs;