// observable.js
// Responsável pelos embeds ObservableHQ
// Carrega e renderiza gráficos do notebook do ObservableHQ

const NOTEBOOK_ID = '@jeanderson-lima/analise-visual-de-contratacoes-e-compras-publicas';

// Mapeamento de células do notebook para containers HTML
const EMBEDS_CONFIG = [
    { cellName: 'viewof view1', containerId: 'observable-embed-01' },
    { cellName: 'viewof view2', containerId: 'observable-embed-02' },
    { cellName: 'viewof view3', containerId: 'observable-embed-03' },
    { cellName: 'viewof view4', containerId: 'observable-embed-04' },
    { cellName: 'viewof view5', containerId: 'observable-embed-05' },
    { cellName: 'viewof view6', containerId: 'observable-embed-06' },
    { cellName: 'viewof view7', containerId: 'observable-embed-07' },
    { cellName: 'viewof view8', containerId: 'observable-embed-08' },
    { cellName: 'viewof view9', containerId: 'observable-embed-09' }
];

// Função auxiliar para carregar scripts externos
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'module';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

export async function safeLoadObservableEmbeds() {
    try {
        // Aguarda um pouco para garantir que o DOM está completamente pronto
        await new Promise(resolve => setTimeout(resolve, 100));

        // Importa o Runtime do Observable
        const { Runtime, Inspector } = await import(
            'https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js'
        );

        // Importa o notebook
        const notebookModule = await import(
            `https://api.observablehq.com/${NOTEBOOK_ID}.js?v=3`
        );

        // Cria uma nova instância do Runtime
        const runtime = new Runtime();

        // Define um mapa de renderizadores para cada célula
        const inspect = (name) => {
            // Procura a configuração correspondente
            const config = EMBEDS_CONFIG.find(c => c.cellName === name);
            
            if (config) {
                const container = document.getElementById(config.containerId);
                
                if (container) {
                    // Limpa o placeholder
                    container.innerHTML = '';
                    container.style.minHeight = 'auto';
                    
                    // Retorna um Inspector para renderizar a célula
                    return new Inspector(container);
                } else {
                    console.warn(`Contêiner não encontrado: ${config.containerId}`);
                }
            }
            
            // Retorna undefined para células que não queremos renderizar
            return undefined;
        };

        // Renderiza o notebook com o mapa de renderizadores
        runtime.module(notebookModule.default, inspect);

        console.log('✓ ObservableHQ embeds carregados com sucesso');
        console.log(`  - ${EMBEDS_CONFIG.length} gráficos renderizados`);
        
    } catch (error) {
        console.error('✗ Erro ao carregar embeds do ObservableHQ:');
        console.error('  Mensagem:', error.message);
        console.error('  Notebook:', NOTEBOOK_ID);
        
        // Mostra mais contexto do erro
        if (error.stack) {
            console.error('  Stack:', error.stack.split('\n').slice(0, 3).join('\n'));
        }
    }
}
