package com.student.controller;

import com.student.common.SessionGetter;
import com.student.common.base.BaseController;

import com.student.pojo.user.ModuleDTO;
import com.student.pojo.user.Permissions;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * @author ll
 * @date 2018/4/12 14:50
 */
@Controller
public class IndexController extends BaseController {

    @GetMapping("/newIndex.html")
    public String newindex() {
        return "admin/newIndex";
    }

    @GetMapping("/test.html")
    public String test() {
        return "admin/test";
    }

    // 菜单
    @RequestMapping(value = "/{module}/menu", method = RequestMethod.GET)
    @ResponseBody
    public Object leftmenu(@PathVariable("module") String module, HttpSession session) {
        ModuleDTO dto = SessionGetter.getLeftMenu(module);
        session.removeAttribute("selectedModule");
        session.setAttribute("selectedModule", dto);
        return dto;
    }

    @GetMapping(value = {"/{module}/{listView}.html", "/{module}/{subModel}/{listView}.html"})
    public ModelAndView listView(HttpServletRequest request, HttpSession session) {
        String uri = ADMIN_PERFIX + request.getRequestURI();

        ModuleDTO dto = (ModuleDTO) session.getAttribute("selectedModule");
        for (Permissions menu : dto.getMenu()) {
            menu.setChecked(menu.getViewUrl().contains(uri) || uri.contains(menu.getViewUrl()));
        }

        session.setAttribute("selectedModule", dto);

        uri = uri.replace(".html", "");

        return new ModelAndView(uri);
    }

}