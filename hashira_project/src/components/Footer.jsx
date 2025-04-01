import React from 'react';
import { 
  GithubOutlined, 
  InstagramOutlined, 
  LinkedinOutlined,
  TwitterOutlined 
} from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bottom Section */}
        <div className="border-t border-blue-600 shadow-blue-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}<a href="" download target="_blank" rel="noopener noreferrer">Hashiras.</a> All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://github.com/darshangk7890" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:hover:text-white transition-colors">
                <GithubOutlined className="text-xl" />
              </a>
              <a href="https://www.instagram.com/ravidarshan928/?hl=en" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors">
                <InstagramOutlined className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/darshan-r-857057250/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-800 transition-colors">
                <LinkedinOutlined className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 