import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';

import { SmileOutlined, SendOutlined } from '@ant-design/icons';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };



    const handleSendMessage = () => {
        if (!inputValue) {
            return;
        }

        const newMessage = { text: inputValue, isUser: true };
        setMessages([...messages, newMessage]);

        if (inputValue === '幫助') {
            setTimeout(() => {
                const botResponse = { text: '我是TRANCE專屬客服機器人!\n有關3D模型相關學習網站，請輸入"Model"\n有關Trance音樂，請輸入"Music"\n如需合作請輸入"Work"', isUser: false };
                setMessages([...messages, botResponse]);
            }, 1000);
        } else if (inputValue === 'Model') {

            const botResponse = { text: '3D模型網站:https://sketchfab.com/feed 超全blender素材網站:https://blenderco.cn/category/yuanma?o=recommend Blender學習:https://kaicho-cg.com/study/', isUser: false };
            setMessages([...messages, botResponse]);
        } else if (inputValue === 'Music') {

            const botResponse = { text: '[tracne音樂]', isUser: false };
            setMessages([...messages, botResponse]);
        
    } else if (inputValue === 'Work') {

        const botResponse = { text: '工作Email:Trance911@gmail.com,電話:0914345213,上班時間:10:00-17:00,需合作請電話聯繫或信箱聯繫,謝謝！', isUser: false };
        setMessages([...messages, botResponse]);
    }

    setInputValue('');
};

useEffect(() => {
    const botResponse = '哈囉！有甚麼能幫到你嗎？';
    setTimeout(() => {
        setMessages([...messages, { text: botResponse, isUser: false }]);
    }, 1000);
}, []);

const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
};

return (
    <div className={`chatbot-container ${isExpanded ? 'expanded' : ''}`}>
        <div className="chatbot-header" onClick={handleToggleExpand}>
            <span className="chatbot-header-icon">
                <i className="fa fa-robot"></i>
            </span>
        </div>
        <div className="chatbot-messages">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`message ${message.isUser ? 'user' : 'bot'}`}
                >
                    {message.text}
                </div>
            ))}
        </div>
        <div className="chatbot-input">
            <Input
                placeholder="Type a message..."
                value={inputValue}
                onChange={handleInputChange}
                onPressEnter={handleSendMessage}
                suffix={<SmileOutlined />}
            />
            <Button type="primary" onClick={handleSendMessage}>
                <SendOutlined />
            </Button>
        </div>
    </div>
);
};

export default Chatbot;
