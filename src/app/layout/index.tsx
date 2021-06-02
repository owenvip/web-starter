import React, { FC } from 'react'
import { Layout } from 'antd'
import SliderMenu from '../slider-menu'
import useMatchedRoute from '@/hooks/use-matched-route'

const { Header, Footer, Content } = Layout

interface Props {
  sliderWidth?: number
}

const BaseLayout: FC<Props> = ({ children, sliderWidth = 220 }) => {
  const route = useMatchedRoute()
  const { meta = {} } = route
  const { hideHeader, hideSlider } = meta

  return (
    <Layout>
      {hideHeader ?? <Header>Header</Header>}
      <Layout>
        {hideSlider ?? <SliderMenu width={sliderWidth} />}
        <Content>{children}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default BaseLayout
