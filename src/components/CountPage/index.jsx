import React from 'react';
import classNames from 'classnames';
import './style.less';

class CountPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1
        };

        this.addPage = this.addPage.bind(this);
        this.minusPage = this.minusPage.bind(this);
    }

    componentWillReceiveProps(nextPros) {
        this.setState({
            page: nextPros.reset ? 1 : this.state.page
        });
    }

    addPage() {

        let _page = this.state.page;

        _page = _page + 1;

        this.setState({
            page: _page
        });

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(_page);
        }
    }

    minusPage() {

        let _page = this.state.page;

        _page = _page - 1;

        this.setState({
            page: _page
        });

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(_page);
        }
    }

    render() {

        let {
            page
            } = this.state;

        let {
            min,
            max
            } = this.props;

        return (
            <div className='pagination row no-gutter'>
                <div
                    className={classNames('col-33', {
                        disabled:page <= min
                    })}
                    onClick={this.minusPage}>◀︎</div>
                <div className='col-33'>{page + '/' + max}</div>
                <div
                    className={classNames('col-33', {
                        disabled:page >= max
                    })}
                    onClick={this.addPage}>▶︎</div>
            </div>
        );
    }
}

CountPage.porpTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number.isRequired,
    reset: React.PropTypes.boolen
};

CountPage.defaultProps = {
    min: 1
};

export default CountPage;