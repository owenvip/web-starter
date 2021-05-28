import React, { FC } from 'react'
import { Layout } from 'antd'
import SliderMenu from '../slider-menu'

const { Header, Footer, Content } = Layout;

interface Props {
  sliderWidth?: number
}

const BaseLayout: FC<Props> = ({ children, sliderWidth = 220 }) =>
(
  <Layout >
    <Header>Header</Header>
    <Layout>
      <SliderMenu
        width={sliderWidth}
      />
      <Content>
        {children}
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
)

export default BaseLayout
