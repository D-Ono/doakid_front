import React, { useState, useEffect } from 'react';
import { Container, FrameContainer, MainContainer } from './style';
import AdminHeader from '../../components/AdminHeader';
import AdminMenu from '../../components/AdminMenu';
import InfoFrame from '../../components/AdminInfoFrame';
import { AdminTitle } from '../../components/AdminTitle';
import api from "../../services/api";
import { Chart } from "react-google-charts";

export const options = {
  title: "Usuarios Cadastrados",
  is3D: true,
};

export const options2 = {
  title: "Quantidade de Itens Cadastrados e Doados no Doakid.",
  hAxis: { title: "Meses", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

function AdminInfo() {
    const [itensDisponiveis, setItensDisponiveis] = useState([]);
    const [itensDoados, setItensDoados] = useState([]);
    const [familia, setFamilia] = useState([]);
    const [escola, setEscola] = useState([]);

    useEffect(() => {
      api.get("http://localhost:5000/item/openList").then((response) => {
        setItensDisponiveis(response.data);
      });
      api.get("http://localhost:5000/item/closeListWithoutUser").then((response) => {
        setItensDoados(response.data);
      });
      api.get("http://localhost:5000/familia/list").then((response) => {
        setFamilia(response.data);
      });
      api.get("http://localhost:5000/escola/list").then((response) => {
        setEscola(response.data);
      });
      
    }, []);

    return (
      <Container>
        <AdminHeader></AdminHeader>
        <MainContainer>
            <AdminMenu></AdminMenu>
            <div className='MainContainer'>
              <AdminTitle>Informações Gerais</AdminTitle>
              <FrameContainer>
                <InfoFrame title="Itens Disponiveis"  value={ itensDisponiveis.length } />
                <InfoFrame title="Itens Doados" value={ itensDoados.length }/>
                <InfoFrame title="Usuarios Cadastrados" value={ familia.length }/>
                <InfoFrame title="Escolas Cadastradas" value={ escola.length }/>
              </FrameContainer>
              <Chart
                chartType="PieChart"
                data={[["Task", "Hours per Day"],
                ["Escolas", escola.length ],
                ["Pessoas", familia.length]]}
                options={options}
                width={"100%"}
                height={"400px"}
              />
              <Chart
                chartType="AreaChart"
                width="100%"
                height="400px"
                data={[
                  ["Mês", "Itens Cadastrados", "Itens Doados"],
                  ["Outubro", itensDisponiveis.filter(item => item.data_registro.includes('10')).length, itensDoados.filter(item => item.data_registro.includes('10')).length],
                  ["Novembro", itensDisponiveis.filter(item => item.data_registro.includes('11')).length, itensDoados.filter(item => item.data_registro.includes('11')).length],
                  ["Dezembro", itensDisponiveis.filter(item => item.data_registro.includes('12')).length, itensDoados.filter(item => item.data_registro.includes('12')).length],
                  ["Janeiro", itensDisponiveis.filter(item => item.data_registro.includes('01')).length, itensDoados.filter(item => item.data_registro.includes('01')).length],
                  ["Fevereiro", itensDisponiveis.filter(item => item.data_registro.includes('02')).length, itensDoados.filter(item => item.data_registro.includes('02')).length],
                ]}
                options={options2}
              />
            </div>
        </MainContainer>
      </Container>
    );
}

export default AdminInfo;