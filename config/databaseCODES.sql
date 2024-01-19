CREATE DATABASE Course;

USE Course;

-- for connection run this 

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;

CREATE TABLE users (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);


CREATE TABLE userDetails (
    userDetailId INT PRIMARY KEY AUTO_INCREMENT,
    collageName VARCHAR(512) NOT NULL,
    profileImg VARCHAR(100) NOT NULL,
    streak INT NOT NULL DEFAULT 0,
    userId INT NOT NULL UNIQUE,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
);

CREATE TABLE courses (
    courseId INT PRIMARY KEY AUTO_INCREMENT,
    creatorId INT NOT NULL,
    courseName VARCHAR(255) NOT NULL,
    description VARCHAR(500) NOT NULL,
    createdDateTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    courseImage VARCHAR(255) NOT NULL DEFAULT "testing.jpg",
    FOREIGN KEY (creatorId) REFERENCES users(userId) ON DELETE CASCADE
);

CREATE TABLE topics(
    topicId INT PRIMARY KEY AUTO_INCREMENT,
    courseId INT NOT NULL,
    topicName VARCHAR(255) NOT NULL,
    createdDateTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (courseId) REFERENCES courses(courseId) ON DELETE CASCADE

);

CREATE TABLE subTopics(
    subTopicId INT PRIMARY KEY AUTO_INCREMENT,
    topicId INT NOT NULL,
    subTopicName VARCHAR(255) NOT NULL,
    yotubeLink VARCHAR(512) NOT NULL,
    createdDateTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    duration TIME NOT NULL DEFAULT "00:12:13",
    FOREIGN KEY (topicId) REFERENCES topics(topicId) ON DELETE CASCADE
);

CREATE TABLE enrolls(
    enrollId INT PRIMARY KEY AUTO_INCREMENT,
    courseId INT NOT NULL,
    userId INT NOT NULL,
    UNIQUE KEY unique_enrollment (courseId, userId),
    createdDateTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (courseId) REFERENCES courses(courseId) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE
);


CREATE TABLE likes(
    likeId INT PRIMARY KEY AUTO_INCREMENT,
    courseId INT NOT NULL,
    userId INT NOT NULL,
    createdDateTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES courses(courseId) ON DELETE CASCADE
);

CREATE TABLE comments(
    commentId INT PRIMARY KEY AUTO_INCREMENT,
    subTopicId INT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
    FOREIGN KEY (subTopicId) REFERENCES subTopics(subTopicId) ON DELETE CASCADE
);



-- Insert data into users table
INSERT INTO users (username, passwordHash, email) VALUES
('user1', 'hashed_password1', 'user1@example.com'),
('user2', 'hashed_password2', 'user2@example.com');

-- Insert data into userDetails table
INSERT INTO userDetails ( collageName, profileImg, streak, userId) VALUES
('User College', 'profile_img1.jpg', 5, 1),
('Another College', 'profile_img2.jpg', 3, 2);

-- Insert data into courses table
INSERT INTO courses (creatorId, courseName, description) VALUES
(1, 'Course 1', 'Description of Course 1'),
(2, 'Course 2', 'Description of Course 2');

-- Insert data into topics table
INSERT INTO topics (courseId, topicName) VALUES
(1, 'Topic 1 for Course 1'),
(1, 'Topic 2 for Course 1'),
(2, 'Topic 1 for Course 2');

-- Insert data into subTopics table
INSERT INTO subTopics (topicId, subTopicName, yotubeLink) VALUES
(1, 'SubTopic 1 for Topic 1', 'youtube_link_1'),
(1, 'SubTopic 2 for Topic 1', 'youtube_link_2'),
(2, 'SubTopic 1 for Topic 2', 'youtube_link_3');

-- Insert data into enrolls table
INSERT INTO enrolls (courseId, userId) VALUES
(1, 1),
(1, 2),
(2, 1);

-- Insert data into likes table
INSERT INTO likes (courseId, userId) VALUES
(1, 1),
(1, 2),
(2, 1);

-- Insert data into comments table
INSERT INTO comments (subTopicId, userId) VALUES
(1, 1),
(2, 2),
(3, 1);




SELECT 
    s.topicId,
    s.subTopicId,
    t.topicName,
    s.subTopicName,
    s.yotubeLink,
    s.createdDateTime
FROM 
    subTopics s
JOIN
    topics t ON s.topicId = t.topicId
WHERE 
    t.courseId = 2;



