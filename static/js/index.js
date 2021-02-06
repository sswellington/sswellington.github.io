// Doc: https://br.vuejs.org/v2/guide/index.html

const base = {
    data() {
        return {
            title: 'Wellington Silva',
            subtitle: 'Mestrando em Modelagem Computacional'
        }
    }
}

Vue.createApp(base).mount('#base')


const resume = {
    data() {
        return {
            lncc: 'Mestrando em Modelagem Computacional pelo Laboratório Nacional de Computação Científica (LNCC).',
            futura: 'Pós-graduando em Arquitetura e Infraestrutura de Tecnologia da Informação pela Faculdade Futura do Grupo Educacional Faveni.',
            uff: 'Licenciado em Ciência da Computação, graduado pela Universidade Federal Fluminense (UFF). ',
            iff: 'Aprovado no processo seletivo para ingresso no Instituto Federal de Educação, Ciência e Tecnologia Fluminense (IFF campus Campos-Centro) no ano de 2013.',
            ic: 'Participou do projeto de Iniciação Científica na graduação em Computação.',
            cbms: 'Obteve artigo premiado como Finalist Paper in TCCLS Best Paper Award - Presented at the 2019 IEEE International Symposium on Computer-based Medical Systems (CBMS), IEEE Technical Commitee on Computational Life Sciences.',
            sbc: 'Ex-membro da Sociedade Brasileira de Computação (SBC).',
            anoti: 'Ex-membro do grupo de pesquisa Análise Numérica, Otimização e Tecnologia da Informação (ANOTi).',
            interesse: 'Interesse na área de Processamento Digital de Imagens e Aprendizagem de Máquina'
        }
    }
}

Vue.createApp(resume).mount('#resume')


const footer = {
    data() {
        return {
            name: '2021 © Haruno',
            version: 'Version Beta',
            by: 'sswellington'
        }
    }
}

Vue.createApp(footer).mount('#copyright')