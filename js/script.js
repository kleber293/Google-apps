  const apps = [
    { n: 'Gmail', d: 'Email do Google', u: 'https://mail.google.com', 
      i: '<img src="./logos/Gmail.png"/>',
      tags: ['email', 'correio']
    },
    { n: 'Google Drive', d: 'Arquivos e pastas na nuvem', u: 'https://drive.google.com',
      i: '',
      tags: ['armazenamento', 'nuvem', 'arquivos']
    },
    { n: 'Google Docs', d: 'Editor de textos online', u: 'https://docs.google.com',
      i: '',
      tags: ['texto', 'documentos', 'office']
    },
    { n: 'Google Sheets', d: 'Planilhas na web', u: 'https://sheets.google.com',
      i: '',
      tags: ['planilhas', 'excel', 'tabelas']
    },
    { n: 'Google Forms', d: 'Formulários e pesquisas', u: 'https://forms.google.com',
      i: '', 
      tags: ['formulários', 'pesquisas']
    },
    { n: 'Google Slides', d: 'Apresentações', u: 'https://slides.google.com',
      i: '',
      tags: ['apresentações', 'ppt']
    },
    { n: 'Google Classroom', d: 'Turmas e salas', u: 'https://classroom.google.com',
      i: '', 
      tags: ['educação', 'turmas']
    },
    { n: 'Google Sites', d: 'Criação de sites', u: 'https://sites.google.com',
      i: '', 
      tags: ['sites', 'páginas']
    },
    { n: 'Google Calendar', d: 'Agenda e eventos', u: 'https://calendar.google.com',
      i: '',
      tags: ['agenda', 'eventos', 'calendário']
    },
    { n: 'Google Meet', d: 'Reuniões por vídeo', u: 'https://meet.google.com',
      i: '',
      tags: ['videoconferência', 'reuniões']
    },  
    { n: 'Google Translate', d: 'Tradução', u: 'https://translate.google.com',
      i: '',
      tags: ['tradução', 'idiomas']
    },
    { n: 'Google Photos', d: 'Fotos e álbuns', u: 'https://photos.google.com',
      i: '', 
      tags: ['fotos', 'imagens']
    },
    { n: 'Google Tasks', d: 'Tarefas integradas', u: 'https://tasks.google.com',
      i: '', 
      tags: ['tarefas', 'to-do']
    },   
    { n: 'Google earth', d: 'Mapas 3D', u: 'https://earth.google.com',
      i: '', 
      tags: ['mapas', '3D']
    },
    { n: 'Notebook LLM', d: 'Anotações com IA', u: 'https://notebooklm.google/?gad_source=1&gad_campaignid=22913178387&gbraid=0AAAAA-fwSscKjDm26qaw8LemFLcwE-RE8',
      i: '', 
      tags: ['anotações', 'IA', 'inteligência artificial']
    },
    { n: 'Google maps', d: 'Navegação e mapas', u: 'https://maps.google.com',
      i: '', 
      tags: ['navegação', 'mapas']
    },
    { n: 'YouTube', d: 'Vídeos', u: 'https://www.youtube.com',
      i: '', 
      tags: ['vídeos']
    },
    { n: 'Google Looker', d: 'Gestão e analise de dados', u: 'https://lookerstudio.google.com/u/0/navigation/reporting',
      i: '',
     tags: ['Dados', 'filtros']
    },
    { n: 'Instagram', d: 'Rede social', u: 'https://www.instagram.com/',
      i: '',
      tags: ['Rede social', 'fotos', 'curtidas', 'posts']
    },
    { n: 'Canvas', d: 'Desinger', u: 'https://www.canva.com/',
      i: '',
      tags: ['Fotos', 'posters', 'edição']
    },
    { n: 'Opal', d: 'Ia full streck', u: 'https://opal.google/landing/',
      i: '',
      tags: ['Ia', 'aplicativos', 'ensino']
    },
    {
      n: 'GitHub', d: 'Hospedagem de código-fonte', u: 'https://github.com/',
      i: '',
      tags: ['Plataforma', 'Programação', 'Desenvolvimento']
    },
  ];

  const grid = document.getElementById('grid');
  const q = document.getElementById('q');

  function render(list) {
    grid.innerHTML = '';
    list.forEach(a => {
      const el = document.createElement('a');
      el.className = 'card';
      el.href = a.u;
      // el.target = '_blank'; el.rel = 'noopener noreferrer';
      el.innerHTML = `
        <div class="icon">
          <img src="${a.i}" alt="${a.n}">
        </div>
        <div class="meta">
          <div class="name">${a.n}</div>
          <div class="desc">${a.d}</div>
        </div>
        <span class="tag">
          ${(a.tags?.[0] || 'app')}
        </span>
      `;
      grid.appendChild(el);
    });
  }

  function filter(term) {
    term = term.toLowerCase().trim();
    if (!term) return apps;
    return apps.filter(a =>
      a.n.toLowerCase().includes(term) ||
      a.d.toLowerCase().includes(term) ||
      (a.
      tags || []).some(t => t.toLowerCase().includes(term))
    );
  }
    
  render(apps);
  q.addEventListener('input', () => render(filter(q.value)));
