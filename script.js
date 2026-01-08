// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');
    const modal = document.getElementById('modal');
    const contactForm = document.getElementById('contactForm');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
            backToTop.classList.add('show');
        } else {
            navbar.classList.remove('sticky');
            backToTop.classList.remove('show');
        }
        
        // 检测技能条是否进入视口
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (barPosition < screenPosition) {
                bar.style.width = bar.style.width;
            }
        });
        
        // 更新当前活动导航项
        updateActiveNavItem();
    });
    
    // 移动端菜单切换
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // 点击导航链接平滑滚动到对应部分
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // 关闭移动端菜单
            navLinks.classList.remove('active');
        });
    });
    
    // 更新当前活动导航项
    function updateActiveNavItem() {
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    // 平滑滚动到指定部分
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
    
    // 返回顶部功能
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // 项目模态框
    function openModal(projectId) {
        const modalBody = document.getElementById('modal-body');
        let projectContent = '';
        
        // 根据项目ID显示不同内容
        switch(projectId) {
            case 1:
                projectContent = `
                    <div class="modal-project">
                        <div class="modal-project-header">
                            <h2>项目1：电子商务网站</h2>
                        </div>
                        <div class="modal-project-image">
                            <img src="https://via.placeholder.com/600x300" alt="电子商务网站">
                        </div>
                        <div class="modal-project-content">
                            <p>这是一个现代化的电子商务网站，使用React和Node.js构建，提供完整的在线购物体验。</p>
                            <h3>项目描述：</h3>
                            <p>该项目是一个功能完备的电子商务平台，支持产品展示、搜索、购物车、用户认证、订单管理和支付集成等核心功能。采用前后端分离架构，前端使用React构建，后端使用Node.js和Express框架，数据库使用MongoDB。</p>
                            <h3>技术栈：</h3>
                            <div class="modal-tech-stack">
                                <div class="tech-item">React</div>
                                <div class="tech-item">Redux</div>
                                <div class="tech-item">React Router</div>
                                <div class="tech-item">Node.js</div>
                                <div class="tech-item">Express</div>
                                <div class="tech-item">MongoDB</div>
                                <div class="tech-item">Styled Components</div>
                                <div class="tech-item">JWT</div>
                                <div class="tech-item">Stripe</div>
                            </div>
                            <h3>功能特性：</h3>
                            <ul>
                                <li>产品展示和高级搜索功能</li>
                                <li>购物车管理和结算流程</li>
                                <li>用户注册、登录和个人中心</li>
                                <li>订单管理和历史记录</li>
                                <li>安全的支付集成</li>
                                <li>响应式设计，适配各种设备</li>
                            </ul>
                            <div class="modal-project-links">
                                <a href="#" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> 访问项目</a>
                                <a href="#" class="project-link" target="_blank"><i class="fab fa-github"></i> GitHub仓库</a>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 2:
                projectContent = `
                    <div class="modal-project">
                        <div class="modal-project-header">
                            <h2>项目2：博客平台</h2>
                        </div>
                        <div class="modal-project-image">
                            <img src="https://via.placeholder.com/600x300" alt="博客平台">
                        </div>
                        <div class="modal-project-content">
                            <p>这是一个响应式的博客平台，使用Vue.js和Firebase构建，支持Markdown写作和实时评论。</p>
                            <h3>项目描述：</h3>
                            <p>该项目是一个现代化的博客平台，允许用户创建、编辑和发布博客文章，支持Markdown格式和实时评论功能。采用Vue.js框架构建，后端使用Firebase提供的云服务，包括认证、数据库和存储。</p>
                            <h3>技术栈：</h3>
                            <div class="modal-tech-stack">
                                <div class="tech-item">Vue.js</div>
                                <div class="tech-item">Vuex</div>
                                <div class="tech-item">Vue Router</div>
                                <div class="tech-item">Firebase</div>
                                <div class="tech-item">CSS Modules</div>
                                <div class="tech-item">PostCSS</div>
                                <div class="tech-item">Markdown</div>
                            </div>
                            <h3>功能特性：</h3>
                            <ul>
                                <li>文章发布、编辑和删除</li>
                                <li>Markdown支持和实时预览</li>
                                <li>文章分类和标签管理</li>
                                <li>实时评论系统</li>
                                <li>用户认证和授权</li>
                                <li>响应式设计</li>
                            </ul>
                            <div class="modal-project-links">
                                <a href="#" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> 访问项目</a>
                                <a href="#" class="project-link" target="_blank"><i class="fab fa-github"></i> GitHub仓库</a>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 3:
                projectContent = `
                    <div class="modal-project">
                        <div class="modal-project-header">
                            <h2>项目3：区块链投票系统</h2>
                        </div>
                        <div class="modal-project-image">
                            <img src="https://via.placeholder.com/600x300" alt="区块链投票系统">
                        </div>
                        <div class="modal-project-content">
                            <p>这是一个基于区块链的投票系统，使用Solidity和Web3.js构建，提供安全、透明的投票解决方案。</p>
                            <h3>项目描述：</h3>
                            <p>该项目是一个去中心化的投票系统，使用以太坊区块链技术，确保投票过程的安全、透明和不可篡改。用户可以创建投票、参与投票，并实时查看投票结果。</p>
                            <h3>技术栈：</h3>
                            <div class="modal-tech-stack">
                                <div class="tech-item">Solidity</div>
                                <div class="tech-item">Ethereum</div>
                                <div class="tech-item">Web3.js</div>
                                <div class="tech-item">React</div>
                                <div class="tech-item">Truffle</div>
                                <div class="tech-item">Ganache</div>
                            </div>
                            <h3>功能特性：</h3>
                            <ul>
                                <li>创建和管理投票</li>
                                <li>安全的投票过程</li>
                                <li>实时投票结果统计</li>
                                <li>去中心化存储</li>
                                <li>透明的投票记录</li>
                                <li>智能合约自动执行</li>
                            </ul>
                            <div class="modal-project-links">
                                <a href="#" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> 访问项目</a>
                                <a href="#" class="project-link" target="_blank"><i class="fab fa-github"></i> GitHub仓库</a>
                            </div>
                        </div>
                    </div>
                `;
                break;
        }
        
        modalBody.innerHTML = projectContent;
        modal.classList.add('show');
    }
    
    // 关闭模态框
    function closeModal() {
        modal.classList.remove('show');
    }
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // 表单提交处理
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // 简单的表单验证
        if (!name || !email || !message) {
            alert('请填写所有必填字段');
            return;
        }
        
        // 模拟表单提交
        console.log('表单提交数据：', {
            name: name,
            email: email,
            message: message
        });
        
        // 显示成功消息
        alert('感谢您的留言，我会尽快回复您！');
        
        // 重置表单
        this.reset();
    });
    
    // 为元素添加动画效果
    function animateElements() {
        const elements = document.querySelectorAll('.skill-item, .project-card, .info-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
    
    // 初始化动画
    animateElements();
    
    // 技能展开/收起功能
    function toggleSkill(element) {
        const skillItem = element.closest('.skill-item');
        const details = skillItem.querySelector('.skill-details');
        const toggle = element.querySelector('.skill-toggle');
        
        // 切换技能详情的显示/隐藏
        details.classList.toggle('show');
        toggle.classList.toggle('rotate');
    }
    
    // 暴露全局函数
    window.scrollToSection = scrollToSection;
    window.scrollToTop = scrollToTop;
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.toggleSkill = toggleSkill;
});