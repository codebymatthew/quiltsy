// old card code
<div class="max-w-lg rounded overflow-hidden shadow-lg bg-rose-300 mb-5" id="<%= posts[i]._id %> ">
<!-- image -->
<a href="/post/<%= posts[i]._id %> ">
    <img class="w-full cursor-pointer" src="<%= posts[i].image%>" alt="<% posts[i].caption%>">
</a>
<!-- title/like button -->
<div class="px-6 py-4">
    <div class="flex justify-between">
        <div class="font-bold text-xl mb-2"><%= posts[i].title%></div>
        <form
            class="self-end"
            action="/post/likePostOnFeed/<%= posts[i]._id %>?_method=PUT"
            method="POST">
            <button class="btn hover:text-rose-600 font-bold py-2 px-3 rounded text-rose-300 bg-white" type="submit"><i class="fa fa-heart"></i></button>
        </form>
    </div>
    <!-- needlework info -->
    <p class="text-gray-700 text-base">Needlework: <%= posts[i].needlework %> </p>
    <!-- caption -->
    <p class="text-gray-700 text-base"><%= posts[i].caption%></p>
    <!-- likes -->
    <p>Likes: <%= posts[i].likes %> </p>
</div>
</div>