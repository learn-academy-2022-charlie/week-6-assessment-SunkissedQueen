# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) class inheritance
class BlogPostsController < ApplicationController
  def index
    # ---2)     
    # This method is typically used to represent a websites home page
    # There is an instance variable named 'posts' that is retrieving all of the contents withing the BlogPost table withing the database
    @posts = BlogPost.all
  end

  # ---3)
      # This method is typically used when trying to retrieve a single instance within a table
    # The route itself has a query parameter that has a symbol of ':id' which give the route dynamic capabilities
    # params[:id] correlates with the route '/posts/:id'
    # The data passed in as a query is accessed by 'params[:id]' and is being used in conjunction with the .find() method as an argument to retrieve a specific Blog Post
    # An instance variable named post is created to store a specific instance of data
    # 1-3 provided by Full Stacker Jenner
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This is creating our method for our NEW REStful route which will show us th html form required to create a new blog.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
     # This is stating that when using our POST verb and our CREATE route the person must enter the blog params which are the titel of the post and the content that they would like to associate with it.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
        # This is stating that when using our GET verb and our EDIT route the person must specifcally add the id for the blog post at the end of the url in which they would like to edit.
        # 4-6 provided by Full Stacker Collin
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
       #This command uses @Post instance variable to update blog_post_params if the @post is valid. If it is valid, it is directed to the blog_post_path if it is not valid the post is not updated and it returns to blog_post_path. It then defines a new method destroy which uses @post instance variable and finds the BlogPost by the id. If the @post instance variable is deleted, it goes back to blog_post_path.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # If the blog post is not deleted, it goes back to blog_post_path.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #This command can only respond to a message with a implicit receiver The private cannot be used outside of class. 
  private
  def blog_post_params
    # ---10)
    #This command is within the private method blog_post_params and it adds a method that requires each object blog_post to contain a title and some content.
    # 7-10 provided by Full Stacker Denise
    params.require(:blog_post).permit(:title, :content)
  end
end
