const cardContainer = document.getElementById('card-container');
const leftColumn = document.getElementById('left-column');
const rightColumn = document.getElementById('right-column');

// 卡片數據
const cardData = [
    {
        title: '功能特性',
        content: `
## GitHub Copilot
- 優點：
  - 擅長即時代碼補全和生成代碼
  - 特別適合經常重複的程式碼片段
  - 具有強大的情境感知能力
  - 基於當前的編碼上下文自動生成代碼片段
  - 適合快速生產力提升
- 缺點：
  - 受限於 2021 年的知識庫
  - 對於一些較新的框架和技術支持有限
  - 在基礎設施佈建領域（如 IaC）支持有限

![Copilot GIF](copilot.gif)

## Cursor
- 優點：
  - 除了代碼補全功能外，還支援深層次的互動模式
  - 支援 Chat 模式，允許開發者以自然語言向 AI 提問或要求代碼優化
  - 適合複雜問題解決
  - Composer 模式更能讓開發者專注於創作，尤其適合涉及多種內容（如程式碼、文檔等）的場景
- 缺點：
  - 在 token 消耗和 Bug 處理方面有些挑戰

![Cursor GIF](cursor.gif)

## Claude Dev
- 優點：
  - 擅長處理自動化任務
  - 支持生成單元測試、執行系統操作等
  - 在處理複雜項目管理和遞歸搜索方面表現突出
  - 能自主執行一系列任務，適合處理更複雜的應用場景
- 缺點：
  - 代碼補全功能可能不如 GitHub Copilot 和 Cursor 精細
  - 在小型項目或單一文件的情境下，可能不如其他工具靈活

<img src="claudeDev.gif" alt="Claude Dev 演示" style="max-width: 100%; height: auto;">
`
    },
    {
        title: '代碼質量',
        content: `
## GitHub Copilot
- 生成的代碼質量一般較高
- 在主流語言（如 Python、JavaScript 等）中表現良好
- 對較新的技術框架或特定應用領域支持有限
- 代碼可過時

## Cursor
- 能根據開發者的上下文進行更深層次的代碼優化和修改
- 對於需要大量互動或重構的項目，生成的代碼質量有潛力更高

## Claude Dev
- 在大規模項目中，代碼質量表現優秀
- 特別適合需要分析和遞歸解決問題的任務
- 在代碼補全的精確上可能不如 Copilot`
    },
    {
        title: '整合度與開發體驗',
        content: `
## GitHub Copilot
- 與 GitHub 平台深度集成
- 與 VS Code、JetBrains 等主流 IDE 無縫整合
- 開發者在熟悉的環境中能立即上手

## Cursor
- 是獨立的編輯器，提供了更多靈活性
- 適合需要同時編寫種類型內容的開發者
- 與第三方 API 的整合仍有局限

## Claude Dev
- 作為自動化 AI Agent，可以與多種應用進行集成
- 支持 Ollama 和第三方 API
- 能執行更多系統層面的操作`
    },
    {
        title: '隱私與安全',
        content: `
## GitHub Copilot
- 依賴 GitHub 平台的安全機制
- 與 GitHub 生態緊密集成
- 代碼處理受限於 GitHub 的安全策略

## Cursor
- 有強大的安全保障機制
- 存在歷史對話丟失的情況
- 可能導致開發者需要手動保存結果
- 在隱私保護上稍有欠缺

## Claude Dev
- 提供更高級的自動化和文件交互能力，可能增加安全風險
- 在處理本地文件或執行系統操作時需要謹慎
- 對於隱私和安全性要求高的項目需要特別注意`
    },
    {
        title: '可擴展性',
        content: `
## GitHub Copilot
- 是封閉系統，與 GitHub 的生態系統緊密結合
- 無法替換或擴展到其他 AI 模型 API
- 擴展性有限

## Cursor
- 支持深層次互動
- 與第三方 API 的兼容性有限
- 不能使用 Ollama 等本地模型
- 擴展性中等

## Claude Dev
- 支持第三方 API 和 Ollama
- 擁有更高的擴展性
- 特別適合需要集成多種工具的開發環境`
    },
    {
        title: '成本效益',
        content: `
## GitHub Copilot
- 每月 10 美元的訂閱費用
- 提供可靠的功能
- 對於開發者來說具備較高的價比

## Cursor
- 提供免費版本
- 進階功能需要每月 20 美元
- 相對來說成本稍高
- 適合需要大量互動與複雜功能的使用者

## Claude Dev
- 成本依賴於具體的使用情況
- 需要額外的 API 集成時，成本可能會提高
- 自動化能力和多任務處理帶來的效率提升能彌補成本`
    },
    {
        title: '總結',
        content: `
## GitHub Copilot
- 適合以代碼生產力提升為主要目標的開發者
- 尤其適合在熟悉的 IDE 環境中工作的開發者

## Cursor
- 更適合需要更強互動性和創意性的開發者
- 特別適合那些需要經常進行複雜的問題討論或文本編輯的工作

## Claude Dev
- 更適合大型項目或需要大量自動化和多步驟操作的開發環境
- 特別是在處理複雜任務和文件管理時表現突出

<img src="bref.jpg" alt="Bref 圖片" style="width: 100%; max-width: 800px; height: auto; display: block; margin: 20px auto;">
`
    }
];

// 創建頁籤
function createTab(data) {
    const tab = document.createElement('div');
    tab.className = 'card-tab';
    tab.textContent = data.title;
    return tab;
}

// 創建內容
function createContent(data) {
    const content = document.createElement('div');
    content.className = 'card-content';
    content.innerHTML = marked.parse(data.content);

    // 調整所有 GIF 圖片大小
    const gifImages = content.querySelectorAll('img[src$=".gif"]');
    gifImages.forEach(img => {
        img.style.width = '100%'; // 設置寬度為 100%
        img.style.maxWidth = '800px'; // 將最大寬度增加到 800px
        img.style.height = 'auto'; // 保持高度自動調整，以維持比例
        img.style.display = 'block';
        img.style.margin = '20px auto'; // 增加上下邊距
    });

    // 添加评论部分
    const commentSection = document.createElement('div');
    commentSection.className = 'comment-section';
    commentSection.innerHTML = `
        <div class="input-container">
            <textarea class="userInput" placeholder="輸入您的評論..."></textarea>
            <button class="submitBtn">提交</button>
        </div>
        <div class="comments-container"></div>
    `;

    content.appendChild(commentSection);
    initCommentFeature(commentSection, data.title);

    return content;
}

// 初始化评论功能
function initCommentFeature(commentSection, cardTitle) {
    const userInput = commentSection.querySelector('.userInput');
    const submitBtn = commentSection.querySelector('.submitBtn');
    const commentsContainer = commentSection.querySelector('.comments-container');

    // 检查是否已经加载过评论
    if (!commentsContainer.dataset.loaded) {
        loadSavedComments(cardTitle, commentsContainer);
        commentsContainer.dataset.loaded = 'true';
    }

    submitBtn.addEventListener('click', function() {
        submitComment(cardTitle, userInput, commentsContainer);
    });

    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            submitComment(cardTitle, userInput, commentsContainer);
        }
    });
}

function submitComment(cardTitle, userInput, commentsContainer) {
    if (userInput.value.trim() !== '') {
        const now = new Date();
        const timestamp = now.toISOString();
        const commentId = `comment_${Date.now()}`;
        
        const commentData = {
            id: commentId,
            timestamp: timestamp,
            content: userInput.value,
            likes: 0,
            replies: []
        };
        
        let comments = JSON.parse(localStorage.getItem(`comments_${cardTitle}`)) || [];
        comments.push(commentData);
        localStorage.setItem(`comments_${cardTitle}`, JSON.stringify(comments));
        
        renderComment(commentData, commentsContainer, cardTitle);
        userInput.value = ''; // 清空输入框
    }
}

function loadSavedComments(cardTitle, commentsContainer) {
    const comments = JSON.parse(localStorage.getItem(`comments_${cardTitle}`)) || [];
    comments.forEach(comment => renderComment(comment, commentsContainer, cardTitle));
}

function renderComment(comment, container, cardTitle) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
        <p><strong>${new Date(comment.timestamp).toLocaleString()}</strong></p>
        <p>${comment.content}</p>
        <button class="likeBtn" data-liked="${isCommentLiked(comment.id)}">👍 ${comment.likes}</button>
        <button class="replyBtn">回覆</button>
        <button class="editBtn">編輯</button>
        <button class="deleteBtn">刪除</button>
        <div class="replies"></div>
    `;

    const likeBtn = commentElement.querySelector('.likeBtn');
    const replyBtn = commentElement.querySelector('.replyBtn');
    const editBtn = commentElement.querySelector('.editBtn');
    const deleteBtn = commentElement.querySelector('.deleteBtn');
    const repliesContainer = commentElement.querySelector('.replies');

    likeBtn.addEventListener('click', () => likeComment(comment, likeBtn, cardTitle));
    replyBtn.addEventListener('click', () => showReplyInput(comment, repliesContainer, cardTitle));
    editBtn.addEventListener('click', () => editComment(comment, commentElement, cardTitle));
    deleteBtn.addEventListener('click', () => deleteComment(comment, commentElement, cardTitle));

    updateLikeButtonState(likeBtn, isCommentLiked(comment.id));

    // 渲染已有的回覆
    comment.replies.forEach(reply => renderReply(reply, repliesContainer, cardTitle, comment));

    container.appendChild(commentElement);
}

function likeComment(comment, likeBtn, cardTitle) {
    const isLiked = isCommentLiked(comment.id);
    if (!isLiked) {
        comment.likes++;
        setCommentLiked(comment.id, true);
    } else {
        comment.likes--;
        setCommentLiked(comment.id, false);
    }
    updateLikeButtonState(likeBtn, !isLiked);
    likeBtn.textContent = `👍 ${comment.likes}`;
    updateCommentInStorage(comment, cardTitle);
}

function isCommentLiked(commentId) {
    return localStorage.getItem(`liked_${commentId}`) === 'true';
}

function setCommentLiked(commentId, liked) {
    localStorage.setItem(`liked_${commentId}`, liked);
}

function updateLikeButtonState(likeBtn, isLiked) {
    if (isLiked) {
        likeBtn.classList.add('liked');
        likeBtn.setAttribute('data-liked', 'true');
    } else {
        likeBtn.classList.remove('liked');
        likeBtn.setAttribute('data-liked', 'false');
    }
}

function showReplyInput(parentComment, repliesContainer, cardTitle) {
    const replyInput = document.createElement('div');
    replyInput.innerHTML = `
        <textarea class="replyInput" placeholder="輸入您的回覆..."></textarea>
        <button class="submitReplyBtn">提交回覆</button>
    `;
    repliesContainer.appendChild(replyInput);

    const submitReplyBtn = replyInput.querySelector('.submitReplyBtn');
    submitReplyBtn.addEventListener('click', () => submitReply(parentComment, replyInput, repliesContainer, cardTitle));
}

function submitReply(parentComment, replyInput, repliesContainer, cardTitle) {
    const replyContent = replyInput.querySelector('.replyInput').value;
    if (replyContent.trim() !== '') {
        const reply = {
            id: `reply_${Date.now()}`,
            content: replyContent,
            timestamp: new Date().toISOString()
        };
        parentComment.replies.push(reply);
        updateCommentInStorage(parentComment, cardTitle);
        renderReply(reply, repliesContainer, cardTitle, parentComment);
        replyInput.remove();
    }
}

function renderReply(reply, container, cardTitle, parentComment) {
    const replyElement = document.createElement('div');
    replyElement.className = 'reply';
    replyElement.innerHTML = `
        <p><strong>${new Date(reply.timestamp).toLocaleString()}</strong></p>
        <p>${reply.content}</p>
        <button class="editReplyBtn">編輯</button>
        <button class="deleteReplyBtn">刪除</button>
    `;

    const editReplyBtn = replyElement.querySelector('.editReplyBtn');
    const deleteReplyBtn = replyElement.querySelector('.deleteReplyBtn');

    editReplyBtn.addEventListener('click', () => editReply(reply, replyElement, cardTitle, parentComment));
    deleteReplyBtn.addEventListener('click', () => deleteReply(reply, replyElement, cardTitle, parentComment));

    container.appendChild(replyElement);
}

function editReply(reply, replyElement, cardTitle, parentComment) {
    const contentP = replyElement.querySelector('p:nth-child(2)');
    const editInput = document.createElement('textarea');
    editInput.value = reply.content;
    contentP.replaceWith(editInput);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = '保存';
    saveBtn.addEventListener('click', () => {
        reply.content = editInput.value;
        reply.timestamp = new Date().toISOString(); // 更新時間戳記
        updateCommentInStorage(parentComment, cardTitle);
        replyElement.innerHTML = `
            <p><strong>${new Date(reply.timestamp).toLocaleString()}</strong></p>
            <p>${reply.content}</p>
            <button class="editReplyBtn">編輯</button>
            <button class="deleteReplyBtn">刪除</button>
        `;
        const newEditReplyBtn = replyElement.querySelector('.editReplyBtn');
        const newDeleteReplyBtn = replyElement.querySelector('.deleteReplyBtn');
        newEditReplyBtn.addEventListener('click', () => editReply(reply, replyElement, cardTitle, parentComment));
        newDeleteReplyBtn.addEventListener('click', () => deleteReply(reply, replyElement, cardTitle, parentComment));
    });

    replyElement.appendChild(saveBtn);
}

function deleteReply(reply, replyElement, cardTitle, parentComment) {
    if (confirm('確定要刪除這條回覆嗎？')) {
        parentComment.replies = parentComment.replies.filter(r => r.id !== reply.id);
        updateCommentInStorage(parentComment, cardTitle);
        replyElement.remove();
    }
}

function editComment(comment, commentElement, cardTitle) {
    const contentP = commentElement.querySelector('p:nth-child(2)');
    const editInput = document.createElement('textarea');
    editInput.value = comment.content;
    contentP.replaceWith(editInput);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = '保存';
    saveBtn.addEventListener('click', () => {
        comment.content = editInput.value;
        updateCommentInStorage(comment, cardTitle);
        contentP.textContent = comment.content;
        editInput.replaceWith(contentP);
        saveBtn.remove();
    });

    commentElement.appendChild(saveBtn);
}

function deleteComment(comment, commentElement, cardTitle) {
    if (confirm('確定要刪除這條評論嗎？')) {
        let comments = JSON.parse(localStorage.getItem(`comments_${cardTitle}`)) || [];
        comments = comments.filter(c => c.id !== comment.id);
        localStorage.setItem(`comments_${cardTitle}`, JSON.stringify(comments));
        commentElement.remove();
    }
}

function updateCommentInStorage(comment, cardTitle) {
    let comments = JSON.parse(localStorage.getItem(`comments_${cardTitle}`)) || [];
    const index = comments.findIndex(c => c.id === comment.id);
    if (index !== -1) {
        comments[index] = comment;
        localStorage.setItem(`comments_${cardTitle}`, JSON.stringify(comments));
    }
}

// 加載卡片
function loadCards() {
    cardData.forEach((data, index) => {
        const tab = createTab(data);
        const content = createContent(data);
        
        leftColumn.appendChild(tab);
        rightColumn.appendChild(content);

        tab.addEventListener('click', () => {
            // 移除所有活動狀態
            document.querySelectorAll('.card-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.card-content').forEach(c => c.classList.remove('active'));

            // 添加活動狀態到當前項
            tab.classList.add('active');
            content.classList.add('active');

            // 初始化評論功能（只在第一次点击时初始化）
            const commentSection = content.querySelector('.comment-section');
            if (!commentSection.dataset.initialized) {
                initCommentFeature(commentSection, data.title);
                commentSection.dataset.initialized = 'true';
            }
        });

        // 默認顯示第一個卡片
        if (index === 0) {
            tab.classList.add('active');
            content.classList.add('active');
            initCommentFeature(content.querySelector('.comment-section'), data.title);
        }
    });
}

loadCards();
