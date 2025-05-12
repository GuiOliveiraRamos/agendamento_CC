const formatarNumero = (numero) => {
    // Remove espaços, parênteses, traços e outros caracteres não numéricos
    let numeroLimpo = numero.replace(/[\s\(\)\-]/g, '');
    
    // Se o número não começar com 55, adiciona
    if (!numeroLimpo.startsWith('55')) {
        numeroLimpo = '55' + numeroLimpo;
    }
    
    return numeroLimpo;
}

const sendMessage = () => {
    const cordialidade = document.getElementById('cordialidade').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const anoEscolar = document.getElementById('anoEscolar').value;
    const numeroAlunos = document.getElementById('numeroAlunos').value;
    const numeroAcompanhantes = document.getElementById('numeroAcompanhantes').value;
    const primeiraAtividade = document.getElementById('primeiraAtividade').value;
    const segundaAtividade = document.getElementById('segundaAtividade').value;
    const pessoasEspeciais = document.getElementById('pessoasEspeciais').value;
    const numeroWpp = formatarNumero(document.getElementById('numeroWpp').value);

    const [year, month, day] = data.split('-');
    const dataFormatada = `${day}/${month}`;

    const mensagem = `${cordialidade}!
Meu nome é Guilherme e sou funcionário do Centro de Ciências/UFJF. Espero encontrá-lo(a) bem! 
Estou entrando em contato para confirmar os dados da visitação no dia *${dataFormatada}* às *${hora}*.

Aproveito para fazer outras confirmações. De acordo com o seu agendamento, temos essas informações e precisamos que atualize, caso tenham mudado:
*Ano escolar:* ${anoEscolar}
*Número de alunos:* ${numeroAlunos} 
*Número de acompanhantes:* ${numeroAcompanhantes} 
*Primeira Atividade:* ${primeiraAtividade} 
*Segunda Atividade:* ${segundaAtividade} 
*Há pessoas que necessitam de atendimento especializado no grupo?* ${pessoasEspeciais}

Confirma todos esses itens? 
Caso haja alguma alteração, favor informar aqui por mensagem.
Solicitamos ainda que cheguem no horário para que os alunos possam fazer todas as atividades propostas. O trânsito neste horário é intenso próximo à UFJF.
`;

    const url = `https://api.whatsapp.com/send?phone=${numeroWpp}&text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}
