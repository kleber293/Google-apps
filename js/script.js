  const apps = [
    { n: 'Gmail', d: 'Email do Google', u: 'https://mail.google.com', 
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/gmail.png?raw=true',
      tags: ['email', 'correio']
    },
    { n: 'Google Drive', d: 'Arquivos e pastas na nuvem', u: 'https://drive.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/drive.png?raw=true',
      tags: ['armazenamento', 'nuvem', 'arquivos']
    },
    { n: 'Google Docs', d: 'Editor de textos online', u: 'https://docs.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/docs.png?raw=true',
      tags: ['texto', 'documentos', 'office']
    },
    { n: 'Google Sheets', d: 'Planilhas na web', u: 'https://sheets.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/sheet.png?raw=true',
      tags: ['planilhas', 'excel', 'tabelas']
    },
    { n: 'Google Forms', d: 'Formulários e pesquisas', u: 'https://forms.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/forms.png?raw=true', 
      tags: ['formulários', 'pesquisas']
    },
    { n: 'Google Slides', d: 'Apresentações', u: 'https://slides.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/slides.png?raw=true',
      tags: ['apresentações', 'ppt']
    },
    { n: 'Google Classroom', d: 'Turmas e salas', u: 'https://classroom.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/classroom.png?raw=true', 
      tags: ['educação', 'turmas']
    },
    { n: 'Google Sites', d: 'Criação de sites', u: 'https://sites.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/sites.png?raw=true', 
      tags: ['sites', 'páginas']
    },
    { n: 'Google Calendar', d: 'Agenda e eventos', u: 'https://calendar.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/calendar.png?raw=true',
      tags: ['agenda', 'eventos', 'calendário']
    },
    { n: 'Google Meet', d: 'Reuniões por vídeo', u: 'https://meet.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/meet.png?raw=true',
      tags: ['videoconferência', 'reuniões']
    },  
    { n: 'Google Translate', d: 'Tradução', u: 'https://translate.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/translater.png?raw=true',
      tags: ['tradução', 'idiomas']
    },
    { n: 'Google Photos', d: 'Fotos e álbuns', u: 'https://photos.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/photos.png?raw=true', 
      tags: ['fotos', 'imagens']
    },
    { n: 'Google Tasks', d: 'Tarefas integradas', u: 'https://tasks.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/taks.png?raw=true', 
      tags: ['tarefas', 'to-do']
    },   
    { n: 'Google earth', d: 'Mapas 3D', u: 'https://earth.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/earth.png?raw=true', 
      tags: ['mapas', '3D']
    },
    { n: 'Notebook LLM', d: 'Anotações com IA', u: 'https://notebooklm.google/?gad_source=1&gad_campaignid=22913178387&gbraid=0AAAAA-fwSscKjDm26qaw8LemFLcwE-RE8',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/llm.png?raw=true', 
      tags: ['anotações', 'IA', 'inteligência artificial']
    },
    { n: 'Google maps', d: 'Navegação e mapas', u: 'https://maps.google.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/maps.png?raw=true', 
      tags: ['navegação', 'mapas']
    },
    { n: 'YouTube', d: 'Vídeos', u: 'https://www.youtube.com',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/youtube.png?raw=true', 
      tags: ['vídeos']
    },
    { n: 'Google Looker', d: 'Gestão e analise de dados', u: 'https://lookerstudio.google.com/u/0/navigation/reporting',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/looker.png?raw=true',
     tags: ['Dados', 'filtros']
    },
    { n: 'Instagram', d: 'Rede social', u: 'https://www.instagram.com/',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/instagram.png?raw=true',
      tags: ['Rede social', 'fotos', 'curtidas', 'posts']
    },
    { n: 'Canvas', d: 'Desinger', u: 'https://www.canva.com/',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/canvas.png?raw=true',
      tags: ['Fotos', 'posters', 'edição']
    },
    { n: 'Opal', d: 'Ia full streck', u: 'https://opal.google/landing/',
      i: 'https://github.com/kleber293/Google-apps/blob/main/Logos/Opal.png?raw=true',
     tags: ['Ia', 'aplicativos', 'ensino']
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
