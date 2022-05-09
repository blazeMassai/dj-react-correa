from django.contrib import admin
from .models import *
from django.contrib.auth.admin import (
    UserAdmin as DjangoUserAdmin
)
# Register your models here.

class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'memo', 'completed', 'creator')
    list_filter = ('title',)
    search_fields = ('title',)

    def creator(self, obj):
        return '{0} {1}'.format((obj.user.first_name), (obj.user.last_name))

    creator.admin_order_field = 'user__first_name'  # Allows column order sorting
    creator.short_description = 'Author Name'  # Renames column head

class CustomUserAdmin(DjangoUserAdmin):
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (
            "Personal info",
            {"fields": ("first_name", "last_name")},
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            }
        ),
        (
            "Important Dates",
            {"fields": ("last_login", "date_joined")},
        ),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2"),
            },
        ),
    )

    list_display = (
        "id",
        "email",
        "first_name",
        "last_name",
        "is_staff",
    )

    search_fields = ("email", "first_name", "last_name")
    ordering = ("email",)

admin.site.register(Todo, TodoAdmin)
admin.site.register(CustomUser, CustomUserAdmin)