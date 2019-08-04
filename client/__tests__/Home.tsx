import React from "react";
import { shallow } from "enzyme";
import Home from "../src/components/Home";

describe("Home", () => {
    const wrapper = shallow(<Home />);

    it("renders", () => {
        expect(wrapper.find("h1")).toHaveLength(1);
    });
});
