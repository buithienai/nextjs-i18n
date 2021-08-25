import React, { Component } from "react";
import _ from "lodash";
import { PAGE_SIZE } from '../../../commons/constants';

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageActive: parseInt(this.props.page + 1)
		};
	}
	componentDidUpdate(preProps) {
		if (preProps.page !== this.props.page) {
			this.setState({
				pageActive: parseInt(this.props.page + 1)
			});
		}
	}

	_renderPaging = () => {
		if (this.props.totalPage > PAGE_SIZE) {
			return (
				<div className="pagination-pages text-center" id="pagination">
					<ul>
						{this._renderPreviousPaging()}
						{this._renderContentPaging()}
						{this._renderNextPaging()}
					</ul>
				</div>
			);
		}

		return null;
	}

	_renderPreviousPaging = () => {
		let pageActive = this.state.pageActive;

		if (pageActive > 1) {
			return (
				<li className="pagination-prev"><a onClick={() => this.onChangePage("Previous")} className="small-btn btn text-uppercase">PREV.</a></li>
			);
		}

		return (
			<li className="pagination-prev disabled"><a className="small-btn btn text-uppercase disabled">PREV.</a></li>

		);
	}

	_renderNextPaging = () => {
		let totalPage = Math.ceil(this.props.totalPage / PAGE_SIZE);
		let pageActive = this.state.pageActive;

		if (pageActive < totalPage) {
			return (
				<li className="pagination-next" data-num={2} title="Next page"><a onClick={() => this.onChangePage("Next")} className="small-btn btn text-uppercase">NEXT.</a></li>

			);
		}

		return (
			<li className="pagination-next disabled" data-num={2} title="Next page"><a className="small-btn btn text-uppercase disabled">NEXT.</a></li>

		);
	}

	pagination = (currentPage, nrOfPages) => {
		if (!nrOfPages) {
			nrOfPages = 1;
		}

		var delta = 1,
			range = [],
			rangeWithDots = [],
			l;

		range.push(1);

		if (nrOfPages <= 1) {
			return range;
		}

		for (let i = currentPage - delta; i <= currentPage + delta; i++) {
			if (i < nrOfPages && i > 1) {
				range.push(i);
			}
		}
		range.push(nrOfPages);

		for (let i of range) {
			if (l) {
				if (i - l === 2) {
					rangeWithDots.push(l + 1);
				} else if (i - l !== 1) {
					rangeWithDots.push("...");
				}
			}
			rangeWithDots.push(i);
			l = i;
		}

		return rangeWithDots;
	}

	_renderContentPaging = () => {
		let totalPage = Math.ceil(this.props.totalPage / PAGE_SIZE);
		let listPageNumber = this.pagination(this.state.pageActive, totalPage);
		let page = this.state.pageActive;


		return listPageNumber.map((pageNumber, index) => {
			if (!_.isNumber(pageNumber)) {
				return (
					<li key={index} className={page === pageNumber ? "pagination-page active" : "pagination-page"} data-num={1}>
						<a onClick={() => this.onChangePage(pageNumber)}>{pageNumber}</a>
					</li>
				);
			}

			if (listPageNumber.length === 1) {
				return (
					<li key={index} className="pagination-pag active">
						<a onClick={() => this.onChangePage(pageNumber)}>{pageNumber}</a>
					</li>
				);
			}

			return (
				<li key={index} className={page === pageNumber ? "pagination-page active" : "pagination-page"} data-num={1}>
					<a onClick={() => this.onChangePage(pageNumber)}>{pageNumber}</a>
				</li>
			);
		});
	}

	onChangePage = (active) => {
		let totalPage = Math.ceil(this.props.totalPage / PAGE_SIZE);

		if (active === "Previous") {
			if (this.state.pageActive > 1) {
				this.setState({
					pageActive: this.state.pageActive - 1
				});

				this.props.handleChangePage(this.state.pageActive - 1);
			}
			return;
		}

		if (active === "Next") {
			if (this.state.pageActive < totalPage) {
				this.setState({
					pageActive: this.state.pageActive + 1
				});

				this.props.handleChangePage(this.state.pageActive + 1);
			}
			return;
		}

		this.props.handleChangePage(active);

		this.setState({
			pageActive: active
		});

		return;
	}

	render() {
		return this._renderPaging();
	}
}

export default Pagination;