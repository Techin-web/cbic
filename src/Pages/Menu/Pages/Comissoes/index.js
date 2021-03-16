import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import PaginaGenerica from './PaginaGenerica';

const comissoesData = [
  {
    id: '1',
    name: 'Responsabilidade Social',
    page: 'https://cbic.org.br/responsabilidadesocial',
    color: '#5285a0',
    titulo: 'Covid-19:Força-tarefa do Seconci-Rio leva informações às empresas',
    texto: `Fazendo valer a expressão ‘a união faz a força’ neste momento de prevenção do coronavírus (Covid-19), o Serviço Social da Indústria da Construção do Estado do Rio de Janeiro (Seconci-Rio) reuniu sua equipe para promover o serviço de orientação quanto às medidas de proteção contra o vírus.

    Trata-se de uma força-tarefa em prol da disseminação de informações sobre boas práticas nos escritórios e canteiros.
    
    Os profissionais de saúde estão entrando em contato com as empresas contribuintes, levando orientações importantes e abrindo espaço para esclarecimento de dúvidas.
    
    No entanto, o Seconci-Rio alerta que as empresas não precisam esperar o contato. Os canais de atendimento estão à disposição e os profissionais estão prontos para tira dúvidas e passar informações importantes.`,
  },
  {
    id: '2',
    name: 'Inovação',
    page: 'https://cbic.org.br/inovacao',
    color: '#61acb4',
    titulo:
      'GT de Incentivo à Construção Industrializada realiza primeira reunião',
    texto: `No âmbito do Edital de Chamamento Público nº 3/2019 do Ministério da Economia foi criado um grupo de trabalho para elaboração e coordenação das ações relacionadas à meta 9 – Incentivo à construção industrializada.

    Realizada no último dia 3, a reunião convocada pela Rede Catarinense de Inovação (Recepeti), vencedora do referido Edital, contou com a participação de representantes:
    
     Câmara Brasileira da Construção (CBIC)
    Associação Brasileira da Indústria de Materiais de Construção (Abramat)
    Associação Brasileira da Construção Industrializada de Concreto (Abcic)
    Instituto Aço Brasil
    Associação Brasileira do Drywall (Drywall)
    O Edital contém outras oito metas e as ações visam contribuir para a redução da burocracia no setor de construção civil e para o aumento da sua produtividade e competitividade, por intermédio de atividades que promovam a convergência de códigos de obras e edificações, melhorias nos processos de concessão de alvará de construção, a disseminação do Building Information Modeling (BIM), bem como ações de incentivo à coordenação modular e à construção industrializada no Brasil.
    
    Os objetivos estabelecidos no Edital para a meta 9, são:
    
    Elaboração de planejamento estratégico para a difusão da construção industrializada no Brasil (Elaboração de documentos: estudo para proposta de equalização tributária na cadeia da construção civil; estudo para novos modelos de financiamento; estudo para alterações necessárias na Lei nº 8.666/93).
    Ações de comunicação e disseminação (Realização de pelo menos três eventos e um vídeo).
    O GT não estará restrito às entidades participantes desta primeira agenda. A Recepeti solicitou indicações de outras entidades que possam agregar aos objetivos do grupo, que será coordenado pela Abramat.
    
    Durante a reunião foram apresentados os materiais desenvolvidos pelas entidades da indústria da construção que podem servir de base para a elaboração do planejamento estratégico e foi consensado ainda que as ações estão convergentes ao estabelecido no projeto Construção 2030 e que poderão ser somados aos esforços da cadeia produtiva e academia já mobilizados para o aumento da competitividade do setor.`,
  },
  {
    id: '3',
    name: 'Habitação de interesse social',
    page: 'https://cbic.org.br/habitacao-interesse-social',
    color: '#5285a0',
    titulo: 'Posicionamento – A quem interessa o saque do FGTS?',
    texto: `14% das contas detêm 84% do saldo – são os trabalhadores estáveis, com salários mais altos e depositados ao longo de muitos anos. São os que têm menor risco de desemprego agora.

    86% das contas detêm 16% dos saldos – são os trabalhadores com salários baixos e que trocam de emprego constantemente pela baixa qualificação. São os que, em grande parte, vivem do emprego gerado pelo FGTS: trabalham um dia para se alimentar no outro.
    
    Quais foram os reflexos reais do saque do FGTS? Vejam os efeitos do último saque, a partir de setembro/19: não houve efeito sobre o consumo das famílias.
    
    Qual o efeito na economia ao liberar o FGTS?
    Pouco impacto no consumo, reduziu o investimento em habitação e o resultado final foi: retração da atividade econômica e redução de empregos.

    Ao ativar a construção civil, estimulamos 62 segmentos da economia. Os insumos são basicamente nacionais, a cadeia produtiva gera emprego e renda no Brasil: cada emprego gerado na construção civil reverte em outros 2,1 na economia.

    O aumento do desemprego e a carência de três meses para o pagamento do FGTS pelas empresas vão impactar a liquidez do Fundo e gerar ainda mais desemprego: são 500 mil empregos diretos, em torno de 1,5 milhão na cadeia produtiva.

    A habitação de interesse social será um dos vetores para a retomada da economia.

    Hoje, existe uma liquidez que precisa atender os compromissos já firmados:

    orçamento 2020;
    contratos em andamento de anos anteriores, com parcelas a serem pagas;
    unidades de empreendimentos financiados que precisam de recursos para financiar os adquirentes;
    saque dos trabalhadores.
    Do quê o Brasil precisa? Do quê precisam os trabalhadores brasileiros?`,
  },
  {
    id: '4',
    name: 'Infraestrutura',
    page: 'https://cbic.org.br/infraestrutura',
    color: '#61acb4',
    titulo:
      'Setor debate impactos da pandemia do coronavírus nas obras públicas',
    texto: `O Sindicato da Indústria da Construção Civil no Estado do Paraná (Sinduscon-PR) coloca em pauta nesta terça-feira (14), às 16h, via webinar, os ‘Impactos da pandemia do coronavírus nas obras públicas’. Para debater o tema, a entidade convocou profissionais de peso e que estão bem alinhados com as demandas do setor e os reflexos que essa crise pode ocasionar.

    Impactos da pandemia do coronavírus nas obras públicas
    
    Carlos Cade, vice-presidente do Sinduscon-PR e da Área de Obras Públicas
    Fernando Vernalha, doutor em Direito do Estado, sócio fundador do VG&P Advogados
    Carlos Eduardo Lima Jorge, presidente da Comissão de Infraestrutura (Coinfra) da Cãmara Brasileira da Indústria da Construção (CBIC) da CBIC
    José Eugenio Gizzi, vice-presidente da Região Sul da CBIC
    A palestra será online e gratuita. Para ter acesso, basta fazer a inscrição pelo site: http://eventos.sindusconpr.com/`,
  },
  {
    id: '5',
    name: 'Jurídico',
    page: 'https://cbic.org.br/juridico',
    color: '#5285a0',
    titulo: 'Covid-19: Construção civil debate os impactos jurídicos da crise',
    texto: `Discutir e esclarecer dúvidas às empresas do setor da construção sobre os impactos jurídicos da crise provocada pelo coronavírus (Covid-19) foi o principal objetivo da edição desta quinta-feira (26) do ‘Diálogo CBIC’, transmitido ao vivo, com a mediação do presidente da Câmara Brasileira da Indústria da Construção (CBIC), José Carlos Martins. “A ideia é esclarecer dúvidas, mas também receber sugestões de como devemos atuar para melhorar a situação perante o Legislativo, Executivo e Judiciário”, destacou o executivo, citando o canal aberto pela entidade com esse objetivo.

    O vice-presidente da área Jurídica da CBIC, José Carlos Gama, ressaltou a importância da advocacia preventiva para enfrentar o momento. “Qualquer situação individual deve ser objeto de análise específica, levando-se em consideração o meio e as particularidades no qual está inserida”, disse.
    
    Dentre as sugestões apresentadas e que serão encaminhadas pela CBIC, a necessidade dos cartórios manterem fisicamente seus funcionários para darem andamento às solicitações de atualização de matrículas, em substituição ao atendimento remoto; a aplicabilidade da prática do Registro Eletrônico, e que a construção civil e os serviços complementares a ela sejam elencados como atividades essenciais durante a pandemia, a exemplo do que já ocorreu no Estado de Minas Gerais.
    
    Esclarecimentos
    No caso de paralisação de obras, a recomendação é verificar a existência de determinação municipal, estadual ou federal a respeito do assunto. “É importante que o cliente seja notificado sobre eventual necessidade de paralisação das obras”, mencionou Gama, ressaltando que o atraso na conclusão da obra será superior ao tempo parado, pois o ritmo normal da obra não se restabelece com o retorno das atividades.
    
    Para os contratos em geral, a sugestão é de reformulação do contrato. “Um péssimo acordo ainda é melhor que uma boa briga!”, diz.
    
    Em contratos com o Poder Público, as empresas poderão obter a extensão ou prorrogação dos prazos de execução. Além disso, poderão, alternativamente, suspender a execução dos trabalhos.
    Em casos mais críticos, as empresas poderão postular a própria rescisão do contrato, quando demonstradas dificuldades operacionais intransponíveis impostas pela pandemia.
    
    Para os casos em que se demonstrar oneração de custos de produção do contrato imposta pelas novas circunstâncias, as empresas poderão fazer jus a reequilíbrio econômico-financeiro.
    
    No entanto, segundo Gama, todas essas hipóteses dependerão da demonstração de que as circunstâncias da pandemia dificultam ou inviabilizam a execução do contrato, no modo e prazo contratados.
    
    Em relação aos tributos, Gama apontou a possibilidade de pagamento diferido das parcelas do Simples Nacional dos meses de março, abril e maio, e a suspensão da exigibilidade das parcelas do FGTS de março, abril e maio, bem como a possibilidade de transação tributária de débitos pela Medida Provisória 899/2019, que estipula prazo para quitação em até 84 meses, com redução de até 50% do valor total dos créditos a serem transacionados.

    Ainda segundo Gama, estão suspensos os procedimentos administrativos perante a Receita Federal, como emissão eletrônica automática de aviso de cobrança e intimação para pagamento de tributos, notificação de lançamento da malha fiscal da pessoa física e a exclusão de contribuinte de parcelamento por inadimplência de parcelas.

    Também prorrogado por 90 dias o prazo de validade das Certidões Negativas de Débitos relativos a Créditos Tributários Federais e à Dívida Ativa da União (CND) e Certidões Positivas com Efeitos de Negativas de Débitos relativos a Créditos Tributários Federais e à Dívida Ativa da União (CPEND).

    Com relação ao seguro garantia performance, a orientação é de que, em razão do estado de calamidade pública, segurados leiam as apólices e contratos, em razão da possível alegação de caso fortuito e força maior.

    Sobre legislação aprovada no Governo do Distrito Federal (GDF) estabelecendo que o locatário pode adiar o pagamento de alugueis, a CBIC vai examinar o assunto e divulgar recomendações..

    Antes de encerrar a transmissão, o presidente José Carlos apresentou o novo site da CBIC e suas funcionalidades, destacando a prestação de serviços da entidade para orientar o empresário nesse período.`,
  },
  {
    id: '6',
    name: 'Indústria imobiliária',
    page: 'https://cbic.org.br/industriaimobiliaria',
    color: '#61acb4',
    titulo: 'Covid-19: Caixa detalha medidas de incentivo à construção',
    texto: `Representantes da Caixa Econômica Federal detalharam a empresários do setor da construção, nesta quinta-feira (9), durante o ‘Diálogos CBIC: Medidas de incentivo à construção’, transmitido online, as medidas anunciadas pelo presidente da instituição, Pedro Guimarães, para o mercado imobiliário. “São alternativas que garantem segurança para a Caixa e condições de produção para o setor, em uma forma de capital de giro, como a antecipação de parcelas e a liberação de recursos que a construtora poderia ter consumido”, afirma o diretor executivo de Habitação da instituição, Matheus Neves Sinbaldi.

    As medidas estarão disponíveis a partir de segunda-feira (13). O objetivo é garantir emprego, renda e a sustentabilidade das operações que estão rodando na Caixa. Para isso, as construtoras não poderão demitir seus empregados e terão que manter os cuidados que já estão sendo adotados para mitigar os riscos do coronavírus (Covid-19) nos canteiros de obras.
   
    
   
   Impactos das medidas:
   5,5 milhões de famílias beneficiadas com a operação
   R$ 43 bilhões em novas linhas de crédito. Somados a mais R$ 111 bilhões em novas linhas, o que totalizará R$ 154 bilhões injetados na economia.
   1,2 milhão de empregos diretos e indiretos serão mantidos
   530 mil unidades habitacionais serão construídas
    Participaram do debate:
   
   José Carlos Martins, presidente da CBIC
   Carlos Henrique Passos, vice-presidente da área de Habitação de Interesse da CBIC
   Celso Petrucci, vice-presidente da área Imobiliária da CBIC
   Eduardo Eirado, superintendente nacional
   Rodrigo Souza Wermelinger, superintendente nacional
   Alexandre Martins Cordeiro, superintendente nacional
   Daurim Duarte, superintendente nacional
   Marcus Paiano, superintendente nacional
    Confira as medidas, detalhadas pelos representantes da Caixa:
   
    
   
   Possibilidade de prazo de carência de 180 dias nas novas contratações e na amortização das obras concluídas
   Carência de 180 dias para início das obras
   
   Na fase de contratação de um novo empreendimento para execução da obra, possibilidade de até seis meses para iniciar a obra.
   Aplicado a todos os segmentos (SBPE e FGTS)
   Sem despesas de juros, nesse período.
    
   
   Carência de 180 dias para amortização das obras concluídas
   Na fase de amortização de obras, para os empreendimentos que estão sendo concluídos nos próximos meses, o construtor poderá solicitar o prazo de carência.
   Aplicado a todos os segmentos (SBPE e FGTS)
   Serão pagos juros e atualização monetária e o principal ficará com carência normal.
    
   Antecipação de até 3 meses do cronograma para obras em execução
   Antecipando essas parcelas, a Caixa consegue garantir velocidade e manter as obras, como uma forma de capital de giro.
   Vale tanto para o Plano Empresário quanto para o Apoio à Produção
   Serão os três meses a executar da obra (cronograma da GIHAB), com um limitador de 10%
   Incidirá sobre Pessoa Jurídica
   Será sobre o que foi executado
   Para a empresa acessar, a medida será aplicada na fase de obra do projeto
   A operação tem que ter o PJ disponível
   As obras têm que estar no andamento normal
   As operações têm que estar adimplentes, principalmente com seus seguros
   A metodologia será em cima no cronograma cadastrado na GIHAB
    
   
   Liberação de recursos do financiamento não utilizados anteriormente
   A operação tem que ter um saldo.
   A empresa tem que não ter usado algum recurso anterior.
   A obra tem que estar com andamento normal.
   O benefício tem uma limitação de 10% do valor do PJ.
   A obra tem que apresentar relação de garantia à época da realização do contrato.
   A empresa tem que solicitar ao gerente.
   O levantamento do valor será feito pela GIHAB e informado às empresas.
   Aplica-se a todo empreendimento que tem PJ (SBPE e FGTS)
    
   
   Admitir prorrogação do cronograma físico-financeiro das obras
   Permite reformulação do cronograma junto à GIHAB
   Não terá tarifa de reformulação nesse momento
   Sobre prorrogação de análises e avaliações:
   
   Novos clientes PJ e PF já está saindo com um prazo de avaliação de 180 dias.
   As avaliações de PJ vencidas após 16 de março serão prorrogadas por 90 dias para empreendimento e tomador.
   As avaliações de PJ vencidas antes de 16 de março não serão prorrogadas. Serão reavaliadas.
   Avaliação vencida será avaliada na Pessoa Física. Ainda não está resolvida.
   Avaliação a vencer – o cliente decide se quer a prorrogação ou reavaliação da operação.
    
   
   Possibilidade de pagamento parcial dos encargos por 90 dias
   O valor mínimo a ser pago pela empresa (PJ) é o dos juros.
    
   
   Antecipação de até 20% do financiamento em novos empreendimentos
   Para quem está no início do empreendimento
   Até R$ 300 milhões é de 10% e acima de R$ 300 milhões até 20%.
   Se aplica a todos os produtos (FGTS e SBPE), para as obras contratadas sem o primeiro desembolso.
   Rating A e rating B pode, pedir o rito.
   Terá que ter uma capacidade mínima de pagamento para suportar a antecipação no início das obras.
   Para os contratos já assinados, a Caixa fará um termo aditivo.
   Traz uma possibilidade de ter um manejo de liquidez imediato, mesmo que não tenha sido pedido no início, poder incluir dentro do projeto já contratado e não executado.
   As operações são limitadas ao valor do terreno.
   O crédito pode ser feito após a suspensiva.
   Permissão às empresas que não pediram e poderão exercer esse direito.`,
  },
  {
    id: '7',
    name: 'Sustentabilidade',
    page: 'https://cbic.org.br/sustentabilidade',
    color: '#5285a0',
    titulo: 'Covid-19: Ibama informa como fica o licenciamento ambiental',
    texto: `O diretor de Licenciamento Ambiental do Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (Ibama), Jônatas Trindade, informou nesta quinta-feira (9), durante o ‘Diálogos CBIC: Construção e meio ambiente: diálogo necessário em meio à crise Construção como um setor essencial’ que nesse período de pandemia do coronavírus (Covid-19), o Ibama tem conseguido, de forma satisfatória, cumprir a agenda e os prazos informados aos empreendedores.

    Atualmente, segundo o diretor do órgão, o empreendedor pode fazer o requerimento de licenciamento via protocolo eletrônico no site do Ibama. “As obrigações de licenciamento têm que ser mantidas na medida do possível”, afirma Jônatas Trindade, com exceção das medidas ligadas aos níveis adequados, de forma direta, à qualidade ambiental, como medição de barragens, que necessariamente terão que ser controladas.
    
    Trindade reforçou a importância dos empreendedores acompanharem as novas diretrizes no Ibama no site do Instituto.
    
    O consultor jurídico da CBIC, Marcos Saes, reforçou a importância da norma criada pelo Ibama neste momento de crise e lembrou que os grandes processos de licenciamento passam pelo Ibama e essa norma deve ser aplicada por analogia nos estados e municípios.
    
    Dentre as condicionantes analisadas sobre a demanda da presença física, a que tem o impedimento em razão dos decretos, como estabilidade do solo, Saes reforçou que elas podem ser seguidas, desde que comunicada ao órgão ambiental. “Se há um inquérito acompanhando esse processo de licenciamento, informe também ao Ministério Público”, reforça Saes. Neste momento de crise, ‘o mais importante é a boa fé e a pró-atividade’, completa.
    
    Por fim, alertou que a suspensão de prazos não significa que os órgãos não estão trabalhando.
    
    Cartórios
    O vice-presidente da área Jurídica da CBIC, José Carlos Gama, informou que os cartórios deverão estar abertos em regime de plantão, conforme o Provimento 94 do Conselho Nacional de Justiça, mas as corregedorias estaduais terão que regulamentar. Veja alguns pontos do provimento, cuja íntegra está disponível na área ‘Como a CBIC pode te ajudar hoje?’
    
    Os cartórios devem abrir todos os dias úteis, preferencialmente em regime de plantão à distância.
    Obrigatoriamente os cartórios devem estar abertos por pelo menos 4 horas
    Nos municípios pequenos, deverá haver, obrigatoriamente, o plantão presencial por pelo menos 2 horas
    Nesse período, os documentos serão encaminhados de forma digital, mas depois terão que ser encaminhados pelo correio/motoboy.
    Mediado pelo vice-presidente de área de Meio Ambiente da CBIC e presidente da Comissão de Meio Ambiente (CMA) da entidade, Nilson Sarti, a reunião também contou com a participação de Caio Portugal.`,
  },
  {
    id: '8',
    name: 'Relações Trabalhistas',
    page: 'https://cbic.org.br/relacoestrabalhistas',
    color: '#61acb4',
    titulo:
      'Covid-19: ‘Diálogos CBIC’ esclarece dúvidas sobre medidas trabalhistas',
    texto: `O secretário de Trabalho, Bruno Dalcolmo, esclarecendo dúvidas do setor da construção, afirmou nesta terça-feira (14), durante o
    ‘Diálogos CBIC sobre Medidas Trabalhistas Emergenciais’, transmitido online pelo YouTube, que “não é razoável, em um momento de pandemia, que o coronavirus seja considerado nexo causal” – doença ocupacional – para atividades do setor da construção, numa eventual contaminação no canteiro de obras.
    
    O presidente da Câmara Brasileira da Indústria da Construção (CBIC), José Carlos Martins, deixou claro que o entendimento da entidade é o mesmo e que assim tem se posicionado, mas que é importante a menção da secretaria de que é impossível determinar o nexo causal de uma pandemia, evitando um passivo no Ministério do Trabalho. “Entendemos que, no futuro, dificilmente será possível caracterizar o coronavírus como uma doença ocupacional”.
    
     
    
    Manutenção do emprego e das relações do trabalho
    Ao comentar as Medidas Provisórias 927/20 (do Trabalho) e 936/20 (redução proporcional de jornada de trabalho e salário), Bruno Dalcolmo classificou como o “maior programa de manutenção de empregos da história do país. Estamos falando em R$ 51 bilhões, com 24 milhões de pessoas beneficiadas com uma garantia de emprego pelo mesmo tempo em que o contrato foi reduzido ou suspenso e um total de 73% de pessoas que estão empregadas em regime de CLT protegidas pelas MPs 936 e 927”.
    
    O secretário destacou que as medidas visam, ete a manutenção do emprego e das relações do trabalho, de maneira duradoura, até a retomada do setor produtivo no pós-crise. “As duas Medidas Provisórias foram editadas para que, de maneira organizada e harmonizada, fosse possível oferecer maior flexibilidade às empresas para enfrentar o período de adversidade e ao trabalhador maneiras para manterem seus empregos.”
    
    Bruno Dalcolmo apontou que a MP 927/2020 contém itens de organização imediata dos setores produtivos para:
    
    Simplificar procedimentos para as férias coletivas e individuais
    Facilitar o teletrabalho
    Melhorar o regime de banco de horas
    Diferimento do pagamento do FGTS
    Compensar os feriados
     
    
    Em razão da magnitude da crise, destacou que a MP 936/2020 ao complementar a MP 927/2020 traz pontos concretos de recomposição salarial dos trabalhadores. “A contrapartida é o benefício e não a antecipação do seguro desemprego”.
    
    Lembrou que também foi remetida ao Congresso Nacional a Medida Provisória nº 944, que institui o Programa Emergencial de Suporte a Empregos, que trata do financiamento à Folha de pagamento (Fopag), como inciativa do Tesouro Nacional, da Caixa e do Banco Central.
    
    “Essas três medidas permitem a manutenção do máximo de empregos no país.”, ressalta.
    
    “A absorção das medidas pelas empresas é um grande termômetro de que foram medidas assertivas e necessárias, o que reforça que são medidas de proteção ao emprego”. Houve uma adesão muito forte”, ressalta o presidente do Sindicato da Indústria da Construção do Estado do Pará (Sinduscon-PA), Alex Dias Carvalho.
    
    O vice-presidente da área de Política de Relações Trabalhistas da CBIC, Fernando Guedes Ferreira Filho, reforçou que o setor está utilizando as medidas de forma progressiva. Primeiro a MP 927 e a MP 936 está sendo analisada caso a caso, porque o setor é muito dinâmico. “Há uma preocupação do setor com as novas contratações e novas obras, em como será nos próximos meses”. n
    
    O secretário esclareceu que as medidas colocadas até agora valem para o período da calamidade pública. “É natural que as empresas tendam a utilizar os instrumentos das MPs de forma imediata, mas elas precisam analisar os seus setores e suas próprias condições financeiras e produtivas”, frisa Dalcolmo.
    
    Enfatizou também que o governo está confiante no papel do Supremo Tribunal Federa (STF) em avaliar a constitucionalidade de qualquer dispositivo no país. A MP 936 traz um equilíbrio entre as imposições do momento de emergência e a atuação dos entes sindicais. “Não se fala em redução de trabalho, mas de jornada.  As medidas foram feitas em benefício dos trabalhadores”
    
    Sobre a heterogeneidade e a diferença dos picos da pandemia em cada cidade do país, Dalcolmo mencionou que em razão das particularidades das empresas, dos setores e do pais, as medidas são o mais simples possível. “Por mais que a gente chame de um programa emergencial, a ideia era manter a flexibilidade dos instrumentos. São parâmetros mínimos”, disse, completando que “as empresas podem usar a MP no período de pandemia’.
    
    Contrato Vede e Amarelo
    O secretário também destacou a MP 905 (Contrato Verde e Amarelo). “Para nós, essa é uma das MPs mais importantes em razão do Contrato Verde e Amarelo, que trata da contratação dos jovens, da agenda de microcrédito para o mercado e da liberação de crédito recursal na Justiça do Trabalho. Além de uma série de instrumentos na inspeção do trabalho, como o domicílio eletrônico”, disse. Segundo o secretário, o texto que está em discussão no Congresso Nacional, deve ser aprovado ainda nesta semana.
    
     
    
    Como será o pós-crise?
    Sobre o pós-crise, Martins destacou que o setor da construção impacta diretamente 62 atividades comerciais industriais e mais de 35 atividades de serviço. “É como uma caixa d´água com 97 torneiras. Se for para irrigar a economia, é melhor ter 97 torneiras do que uma ou duas”, destacou.
    
    O executivo colocou a entidade e o setor à disposição, como estratégia para resgatar a economia nacional.`,
  },
  {
    id: '9',
    name: 'Obras Industriais',
    page: 'https://cbic.org.br/obras-industriais',
    color: '#5285a0',
    titulo:
      'Covid-19: Segmento industrial debate questões trabalhista e financeira',
    texto: `‘A saúde dos trabalhadores e a saúde financeira das empresas’ foram destaques do debate online promovido nesta segunda-feira (13) pela Comissão de Obras Industriais e Corporativas (COIC) da Câmara Brasileira da Indústria da Construção (CBIC) com empresários do segmento, com foco nos benefícios e riscos das Medidas Provisórias nºs 927/20 (do Trabalho) e 936/20 (redução proporcional de jornada de trabalho e salário) e os caminhos para obter as linhas de crédito para capital de giro das empresas, anunciadas pelo governo para mitigar os riscos da pandemia do coronavírus (Covid-19) e manter o emprego.

    Aos 90 participantes, o presidente da COIC/CBIC, Ilso de Oliveira, reforçou que “a ideia dos debates é ajudar as empresas do segmento no que se fizer necessário para que o momento seja o menos traumático possível”.
    
    Sobre os benefícios e riscos das MPs 927/20 (do Trabalho) e 936/20 (redução proporcional de jornada de trabalho e salário), o vice-presidente de Relações Trabalhistas da CBIC, Fernando Guedes, ressaltou a importância das empresas avaliarem estrategicamente a adoção das medidas provisórias para esse momento de crise. “Usem muito da MP 927, para depois usar da MP 936, para que, com calma, possam avaliar a situação”, aconselhou Guedes, alertando que “a MP 936, com a redução do salário e a suspensão do contrato de trabalho, implica em estabilidade”.
    
    Em relação à decisão do ministro Ricardo Lewandowski, do Supremo Tribunal Federal (STF), de que os acordos individuais de redução de jornada de trabalho e de salário ou de suspensão temporária de contrato de trabalho previstos na MP 936/2020 somente serão válidos se os sindicatos de trabalhadores forem notificados em até 10 dias e se manifestarem sobre sua validade, Guedes informou que a tendência é de que, no próximo dia 16, o Pleno do Supremo Tribunal Federal (STF) valide os acordos individuais, sem participação dos sindicatos, considerando o benefício maior do empregado, que é a manutenção do emprego, e com a justificativa de estarmos num momento excepcional do coronavírus.
    
    Caminhos para obter linhas de crédito para capital de giro
Já sobre as linhas de crédito anunciadas pelo governo federal para capital de giro das empresas, Ilso de Oliveira destacou que a CBIC tem tratado do tema junto ao Banco Central.  

O professor da Fundação Dom Cabral e consultor em finanças e estratégia, Guilherme Amado, apontou a dificuldade para se conseguir linhas de crédito neste momento. “Empresas que vinham tendo relações bancárias normais e constantes com seus banqueiros, tinham linhas aprovadas e eventualmente até garantias já constituídas, têm conseguido sacar essa linha com uma certa facilidade. As empresas que tinham relações bancárias, mas não tinham garantias formalizadas, estão “suando um pouco a camisa” para conseguir constituir garantias que sejam satisfatórias aos credores para sacar seus empréstimo. Agora, as que não tinham relação bancária e que estão começando agora, estão tendo uma dificuldade enorme”, destacou.

Segundo Guilherme Amado, o cenário do empréstimo está mais na questão de como fazer a relação com o banco acontecer do que efetivamente com a estrutura da crise. “O que os bancos querem ver é a capacidade da empresa gerar caixa”, disse.

 

Conheça a COIC/CBIC
A COIC congrega empresas do segmento de engenharia, construção e montagem com foco nas atividades do setor de implantação de Projetos Industriais e Corporativos, que responde por aproximadamente 1/3 do PIB da Indústria da Construção, o que representa 85 bilhões de reais a cada ano.

A comissão tem como missão elevar a maturidade das empresas que atuam no segmento e aumentar o nível de sucesso na implantação de projetos. No momento, concentra seus esforços em três projetos:

Guia de Gestão Compartilhada – Aumentar a eficácia dos projetos de obras industriais e corporativas por meio do uso da Gestão Compartilhada, desenvolvendo documento com os principais benefícios desta cultura, assim como de sua aplicabilidade;
Valorização da Engenharia – Promover a discussão em prol da valorização da engenharia, buscando frear a depreciação que o setor vem sofrendo nos últimos anos, acentuada com a crise que assola o país;
Fazer Mais e Melhor com Menos
Momento UM: Dialogar, debater propor as ações necessárias para mitigar os danos sofridos com os impactos do COVID-19, buscando aproximar as empresas contratantes e contratadas,
Momento DOIS: Quebra de paradigmas, alinhar vetores do setor em direção ao seu desenvolvimento. Nome do Jogo: cooperação!`,
  },
];

export default function Comissoes({navigation}) {
  function NavigateToPaginaGenerica(params) {
    navigation.navigate('ComissoesWebPage', params);
  }

  function Item({name, page, color, texto, titulo}) {
    return (
      <TouchableOpacity
        style={[styles.Card, {backgroundColor: color}]}
        onPress={() => NavigateToPaginaGenerica({pagePath: page})}>
        <View>
          <Text style={styles.Title}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.Container}>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={comissoesData}
          renderItem={({item}) => (
            <Item
              name={item.name}
              page={item.page}
              color={item.color}
              texto={item.texto}
              titulo={item.titulo}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
  },
  Card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%'),
    height: hp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
    margin: wp('5%'),
  },
  Title: {
    fontSize: wp('5%'),
    color: '#FFF',
  },
});
