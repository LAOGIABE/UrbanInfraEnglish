// Core Application Logic for UrbanInfraEnglish SPA
// Relies on data.js for vocabulary and reading database

class QuizApp {
  constructor() {
    this.currentChapter = null;
    this.questions = [];
    this.currentIndex = 0;
    this.score = { correct: 0, total: 0 };
    this.isAnswered = false;
    this.theme = localStorage.getItem('urban_infra_theme') || 'light';
    
    this.init();
  }

  init() {
    // Apply initial theme
    document.documentElement.setAttribute('data-theme', this.theme);
    
    // Bind DOM events after DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
      this.cacheDom();
      this.bindEvents();
      this.renderDashboard();
      this.updateThemeToggleUI();
    });
  }

  cacheDom() {
    this.dashboardView = document.getElementById('dashboard-view');
    this.quizView = document.getElementById('quiz-view');
    this.chapterGrid = document.getElementById('chapter-grid');
    
    // Quiz View Elements
    this.chapterTitleHeader = document.getElementById('quiz-chapter-title');
    this.backBtn = document.getElementById('btn-back');
    this.progressText = document.getElementById('quiz-progress-text');
    this.progressBarFill = document.getElementById('quiz-progress-fill');
    
    // Question Cards
    this.vocabCard = document.getElementById('vocab-card');
    this.sentenceCard = document.getElementById('sentence-card');
    
    // Vocab Elements
    this.vocabEng = document.getElementById('vocab-eng');
    this.vocabInput = document.getElementById('vocab-input');
    this.vocabCheckBtn = document.getElementById('btn-vocab-check');
    this.vocabNextBtn = document.getElementById('btn-vocab-next');
    this.vocabFeedback = document.getElementById('vocab-feedback');
    this.vocabCorrectAnswer = document.getElementById('vocab-correct-answer');
    
    // Sentence Elements
    this.sentenceEng = document.getElementById('sentence-eng');
    this.sentenceInput = document.getElementById('sentence-input');
    this.sentenceSampleBtn = document.getElementById('btn-sentence-sample');
    this.sentenceNextBtn = document.getElementById('btn-sentence-next');
    this.sentenceTranslationBlock = document.getElementById('sentence-translation-block');
    this.sentenceSampleTranslation = document.getElementById('sentence-sample-translation');
    
    // Theme Toggle
    this.themeToggle = document.getElementById('theme-toggle');
    
    // Results
    this.resultsCard = document.getElementById('results-card');
    this.resultsPercentage = document.getElementById('results-percentage');
    this.resultsScore = document.getElementById('results-score');
    this.btnRestart = document.getElementById('btn-restart');
  }

  bindEvents() {
    // Back to dashboard
    this.backBtn.addEventListener('click', () => this.showDashboard());
    
    // Vocab logic
    this.vocabCheckBtn.addEventListener('click', () => this.checkVocabAnswer());
    this.vocabNextBtn.addEventListener('click', () => this.nextQuestion());
    this.vocabInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (!this.isAnswered) {
          this.checkVocabAnswer();
        } else {
          this.nextQuestion();
        }
      }
    });

    // Sentence logic
    this.sentenceSampleBtn.addEventListener('click', () => this.revealSentenceSample());
    this.sentenceNextBtn.addEventListener('click', () => this.nextQuestion());
    
    // Restart quiz
    this.btnRestart.addEventListener('click', () => this.startQuiz(this.currentChapter.id));
    
    // Theme toggle
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('urban_infra_theme', this.theme);
    this.updateThemeToggleUI();
  }

  updateThemeToggleUI() {
    if (!this.themeToggle) return;
    if (this.theme === 'dark') {
      this.themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m2.828-9.9a5 5 0 117.07 7.07l-2.828-2.828z" />
        </svg>
      `;
    } else {
      this.themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      `;
    }
  }

  renderDashboard() {
    this.chapterGrid.innerHTML = '';
    
    // SVGs mapping for beautiful cards
    const chapterIcons = [
      // Ch 1: Sustainable cities (Buildings, Green)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`,
      // Ch 2: Transport (Roads, bus)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>`,
      // Ch 3: Energy (Power line, lightning)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
      // Ch 4: Water (Water drop)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5" /></svg>`,
      // Ch 5: Drainage (Waves, water filter)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M3 14h18m-9-4v8m-7 0h14" /></svg>`,
      // Ch 6: Environment (Leaf, pollution cloud)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`,
      // Ch 7: IoT (Chip, wireless connection)
      `<svg class="w-8 h-8 text-teal-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>`
    ];

    chaptersData.forEach((chapter, idx) => {
      const savedProgress = localStorage.getItem(`urban_infra_progress_ch_${chapter.id}`) || 0;
      
      const card = document.createElement('div');
      card.className = 'card-chapter bg-[var(--bg-card)] rounded-xl p-6 flex flex-col justify-between cursor-pointer';
      card.setAttribute('role', 'button');
      card.setAttribute('id', `chapter-card-${chapter.id}`);
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 bg-teal-50 dark:bg-cyan-950/40 rounded-lg">
              ${chapterIcons[idx]}
            </div>
            <span class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">CHƯƠNG ${chapter.id}</span>
          </div>
          <h3 class="text-lg font-bold mb-2 line-clamp-2 text-[var(--text-main)] transition-colors hover:text-[var(--accent)]">
            ${chapter.title}
          </h3>
          <p class="text-xs text-[var(--text-muted)] mb-4">
            ${chapter.vocabulary.length} từ vựng • ${chapter.sentences.length} câu kỹ thuật
          </p>
        </div>
        <div>
          <div class="flex justify-between items-center mb-1 text-xs">
            <span class="text-[var(--text-muted)]">Tiến độ hoàn thành</span>
            <span class="font-bold text-[var(--accent)]">${savedProgress}%</span>
          </div>
          <div class="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
            <div class="bg-[var(--accent)] h-2 rounded-full transition-all duration-500" style="width: ${savedProgress}%"></div>
          </div>
        </div>
      `;
      
      card.addEventListener('click', () => this.startQuiz(chapter.id));
      this.chapterGrid.appendChild(card);
    });
  }

  showDashboard() {
    this.currentChapter = null;
    this.quizView.classList.add('hidden');
    this.dashboardView.classList.remove('hidden');
    this.renderDashboard();
  }

  startQuiz(chapterId) {
    this.currentChapter = chaptersData.find(c => c.id === chapterId);
    if (!this.currentChapter) return;

    // Show Quiz View, Hide Dashboard
    this.dashboardView.classList.add('hidden');
    this.quizView.classList.remove('hidden');
    
    // Hide results and show questions content
    this.resultsCard.classList.add('hidden');
    
    this.chapterTitleHeader.textContent = `Chương ${this.currentChapter.id}: ${this.currentChapter.title}`;
    
    // Generate questions sequence:
    // 1. Shuffle vocabulary items
    const shuffledVocab = this.shuffle([...this.currentChapter.vocabulary]);
    // 2. Shuffle reading sentences
    const shuffledSentences = this.shuffle([...this.currentChapter.sentences]);
    
    // Interleave sentences: 1 sentence after every 10 vocabulary words (at index 10, 21, etc.)
    this.questions = [];
    let sentenceIndex = 0;
    
    shuffledVocab.forEach((vocab, index) => {
      this.questions.push({
        type: 'vocab',
        data: vocab
      });
      // Check if we need to insert a sentence (after exactly 10 vocab cards)
      if ((index + 1) % 10 === 0 && sentenceIndex < shuffledSentences.length) {
        this.questions.push({
          type: 'sentence',
          data: shuffledSentences[sentenceIndex++]
        });
      }
    });

    // If there are still sentences left and we have fewer than 10 words, or just to make sure all sentences are practiced
    // we can append them at the end if the user has not completed them
    while (sentenceIndex < shuffledSentences.length) {
      this.questions.push({
        type: 'sentence',
        data: shuffledSentences[sentenceIndex++]
      });
    }

    this.currentIndex = 0;
    this.score = { correct: 0, total: this.questions.length };
    
    this.loadQuestion();
  }

  loadQuestion() {
    this.isAnswered = false;
    this.updateProgress();

    if (this.currentIndex >= this.questions.length) {
      this.showResults();
      return;
    }

    const currentQ = this.questions[this.currentIndex];
    
    // Hide both templates first
    this.vocabCard.classList.add('hidden');
    this.sentenceCard.classList.add('hidden');
    
    if (currentQ.type === 'vocab') {
      this.vocabCard.classList.remove('hidden');
      this.vocabCard.className = "fade-in bg-[var(--bg-card)] shadow-md rounded-xl p-8 border border-[var(--border)] relative overflow-hidden";
      
      // Load vocabulary word
      this.vocabEng.textContent = currentQ.data.word;
      this.vocabInput.value = '';
      this.vocabInput.disabled = false;
      this.vocabInput.className = "w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-app)] text-[var(--text-main)] font-medium transition focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20";
      
      this.vocabCheckBtn.classList.remove('hidden');
      this.vocabNextBtn.classList.add('hidden');
      this.vocabFeedback.classList.add('hidden');
      this.vocabFeedback.innerHTML = '';
      
      setTimeout(() => this.vocabInput.focus(), 100);
    } else {
      this.sentenceCard.classList.remove('hidden');
      this.sentenceCard.className = "fade-in bg-[var(--bg-card)] shadow-md rounded-xl p-8 border border-[var(--border)] relative overflow-hidden";
      
      // Load sentence paragraph
      this.sentenceEng.textContent = currentQ.data.english;
      this.sentenceInput.value = '';
      this.sentenceTranslationBlock.classList.add('hidden');
      
      this.sentenceSampleBtn.classList.remove('hidden');
      this.sentenceNextBtn.classList.remove('hidden');
    }
  }

  updateProgress() {
    const total = this.questions.length;
    const current = Math.min(this.currentIndex + 1, total);
    
    this.progressText.textContent = `Câu hỏi ${current} / ${total}`;
    
    const percentage = ((current - 1) / total) * 100;
    this.progressBarFill.style.width = `${percentage}%`;
  }

  checkVocabAnswer() {
    const currentQ = this.questions[this.currentIndex];
    const userAnswer = this.vocabInput.value;
    
    const cleanUser = this.normalizeText(userAnswer);
    
    // Check matches
    const isCorrect = currentQ.data.meanings.some(meaning => {
      return this.normalizeText(meaning) === cleanUser;
    });

    this.isAnswered = true;
    this.vocabInput.disabled = true;
    this.vocabCheckBtn.classList.add('hidden');
    this.vocabNextBtn.classList.remove('hidden');
    this.vocabNextBtn.focus();

    this.vocabFeedback.classList.remove('hidden');
    
    if (isCorrect) {
      this.score.correct++;
      this.vocabInput.classList.add('border-[var(--success)]', 'bg-[var(--success-bg)]');
      this.vocabFeedback.innerHTML = `
        <div class="flex items-center space-x-2 text-[var(--success)] font-semibold mb-1">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Chính xác!</span>
        </div>
      `;
      // Soft success glow interaction
      this.vocabCard.classList.add('animate-success-glow');
    } else {
      this.vocabInput.classList.add('border-[var(--error)]', 'bg-[var(--error-bg)]', 'animate-shake');
      this.vocabFeedback.innerHTML = `
        <div class="flex items-center space-x-2 text-[var(--error)] font-semibold mb-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Chưa chính xác!</span>
        </div>
        <div class="text-sm border-l-4 border-[var(--accent)] pl-3 py-1 bg-[var(--accent-light)] dark:bg-cyan-950/20 text-[var(--text-main)] rounded-r-md">
          Đáp án đúng là: <strong class="text-[var(--accent)]">${currentQ.data.primaryMeaning}</strong>
        </div>
      `;
    }
  }

  revealSentenceSample() {
    const currentQ = this.questions[this.currentIndex];
    this.sentenceSampleTranslation.textContent = currentQ.data.vietnamese;
    this.sentenceTranslationBlock.classList.remove('hidden');
    this.sentenceSampleBtn.classList.add('hidden');
    this.sentenceNextBtn.focus();
  }

  nextQuestion() {
    // Clean animations classes before transitioning
    this.vocabCard.classList.remove('animate-success-glow');
    this.vocabCard.classList.remove('animate-shake');
    this.sentenceCard.classList.remove('animate-shake');

    this.currentIndex++;
    this.loadQuestion();
  }

  showResults() {
    this.vocabCard.classList.add('hidden');
    this.sentenceCard.classList.add('hidden');
    this.resultsCard.classList.remove('hidden');
    this.resultsCard.className = "fade-in bg-[var(--bg-card)] shadow-md rounded-xl p-8 border border-[var(--border)] text-center relative overflow-hidden";
    
    // Calculate percentage based on vocabulary quiz mode answers
    // Let's count how many vocabulary questions were answered correctly
    const vocabCount = this.questions.filter(q => q.type === 'vocab').length;
    // Calculate completion score
    const completionPercentage = Math.round((this.score.correct / vocabCount) * 100);
    
    this.resultsPercentage.textContent = `${completionPercentage}%`;
    this.resultsScore.textContent = `Bạn đã dịch chính xác ${this.score.correct} / ${vocabCount} thuật ngữ kỹ thuật.`;
    
    // Save completion score to LocalStorage to show on dashboard cards
    const previousBest = parseInt(localStorage.getItem(`urban_infra_progress_ch_${this.currentChapter.id}`)) || 0;
    if (completionPercentage > previousBest) {
      localStorage.setItem(`urban_infra_progress_ch_${this.currentChapter.id}`, completionPercentage);
    }
  }

  // Utilities
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  normalizeText(str) {
    if (!str) return '';
    return str
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ') // Collapse multiple spaces
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]?]/g, '') // Strip punctuation
      .normalize('NFC'); // Normalize unicode accents for Vietnamese
  }
}

// Instantiate the application
const app = new QuizApp();
