import { mount } from "@vue/test-utils";
import Admin from "src/components/Admin.vue";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/vue";

describe("Admin.vue", () => {

    const viewText = "edit me";
    it("should renders is page content is correct", async  () => {
        
        const container = render(Admin, { });
        var x = container.getByPlaceholderText("add category");
        var y = container.getAllByText("Add Word");
        expect(y).toBeTruthy();
        expect(x).toBeTruthy();
        expect(container).toBeTruthy()
    });
  });