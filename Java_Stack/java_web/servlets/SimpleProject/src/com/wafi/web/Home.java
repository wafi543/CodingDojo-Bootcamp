package com.wafi.web;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Home
 */
@WebServlet("/Home")
public class Home extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Home() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String fname = request.getParameter("firstName");
		if (fname == null) {fname = "unkown";}
		String lname = request.getParameter("lastName");
		if (lname == null) {lname = "unkown";}
		String language = request.getParameter("favouriteLanguage");
		if (language == null) {language = "unkown";}
		String homeTown = request.getParameter("homeTown");
		if (homeTown == null) {homeTown = "unkown";}
		
		
        response.setContentType("text/html");
        // writes the response
        PrintWriter out = response.getWriter();
        out.write("<h1>Welcome, " + fname + " " + lname + "</h1>");
        out.write("<h3>Your favourite language is: , " + language + "</h3>");
        out.write("<h3>Your hometown is: , " + homeTown + "</h3>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
