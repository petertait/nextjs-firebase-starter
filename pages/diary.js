import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { initializePage, protectedPage } from '~/utils'
import { Page } from '~/components/layouts'
import { getHashStore, getAuthStore } from '~/stores'
import { HashList, HashInput } from '~/components/diary'

@observer
class Diary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hashStore: getHashStore(),
    }
  }

  componentDidMount () {
    this.state.hashStore.start()
  }

  componentWillUnmount () {
    this.state.hashStore.stop()
  }

  render () {
    return (
      <Page>
        <HashList hashes={this.state.hashStore.hashes.values()} />
        <HashInput disabled={!this.state.hashStore.ready} value={this.state.hashStore.hash} callback={(v) => this.state.hashStore.setHash(v)} />
      </Page>
    )
  }
}

export default initializePage(protectedPage(Diary))
